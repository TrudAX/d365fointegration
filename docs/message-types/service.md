---
sidebar_position: 4
title: Service-based
description: The service message type - synchronous request/response services with standardized contracts, logging, and in-app testing.
---

# Service-based

A service message type handles **synchronous request/response** scenarios — an external system querying D365FO data on demand. The framework standardizes what every custom service otherwise reinvents: the response contract, error handling, logging, and testing.

**Base classes:** `DEVIntegServiceExportBase` (service base), `DEVIntegServiceExportResponseContract` (unified response: a .NET dataset with 0..n tables, an output string, a success flag, and an error message), `DEVIntegDataTableHelper` (dataset building).

## Writing a service

Each service is a class extending `DEVIntegServiceExportBase`. The entry point is a one-liner delegating to the business logic method, which throws on errors — the framework converts exceptions into the response contract automatically:

```xpp
public class DEVIntegTutorialServiceTest extends DEVIntegServiceExportBase
{
    public DEVIntegServiceExportResponseContract getSOInfoDataTable(DEVIntegTutorialServiceTestContract _contract)
    {
        return this.serviceCallProcess(methodStr(DEVIntegTutorialServiceTest, calculateGetSOInfoDataTable), _contract);
    }

    public void calculateGetSOInfoDataTable(DEVIntegTutorialServiceTestContract _contract,
                                            DEVIntegServiceExportResponseContract _response)
    {
        changecompany(_contract.parmCompanyId())
        {
            SalesTable salesTable = SalesTable::find(_contract.parmSalesId(), true);
            if (!salesTable.RecId)
            {
                throw error(strFmt("Sales order %1 not found in company %2",
                    _contract.parmSalesId(), _contract.parmCompanyId()));
            }

            this.initDataTableHelper();

            dataTableHelper.addDataTable('SOHeader');
            dataTableHelper.addRowItem('SalesId',     salesTable.SalesId);
            dataTableHelper.addRowItem('CustAccount', salesTable.CustAccount);
            dataTableHelper.addRow();

            this.addDataTableHelperToResponse(_response);
        }
    }
}
```

The caller checks `IsSuccess`, reads `ErrorMessage` on failure, or deserializes `MessageDataSet` into a `System.Data.DataSet` on success.

## Configuration and testing

Register the class in the [Service message types](../forms/setup/service-message-types.md) form. The **Test** button opens the [Service test form](../forms/operations.md#service-test), which auto-generates the input contract — specify parameters and **Execute**, no external tools needed. Logging levels from statistics-only to full request/response are described under [Service call log](../forms/logs.md#service-call-log).

## Tutorial

- [Implement service-based integration in D365FO](https://denistrunin.com/integration-services) — the design rationale, the full sample, and logging options.
