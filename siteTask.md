I want to create a separate site for my External Integration framework


It is open source framework currently located on GitHub and that has a series of post in my blog post 



I see the site as a landing page(probably in some similar Microsoft style) and some detail documentation about framework use cases + framework documentation



The landing page should be something like(use this as example only, rephase for more clarity):

Free open source framework for Microsoft Dynamics 365 For Operations

Build reliable and easy to support D365FO integrations 

A free, open-source X++ framework for predictable inbound and outbound integrations—one repeatable model for designing, processing, testing, and operating every interface.

Some key properties: Real life production-proven scenarious, Focus on support & troubleshoting, Fully written on X++(no external components) 

That it should be some common External Integration framework usage steps:

1. Design
Ready-to-use templates for integration planning:
Inbound, 
Outbound Event-based, Outbound Periodic, 
Service-based

2. Load data
Sample connectors for: 
Service Bus, SFTP, Azure File share, Rest API, AI (LLM), Manual

3. Process data
Import documents from: CSV, Excel, XML, JSON, PDF
Sample implementations for: Sales lines, Ledger journals, Purchase lines, Vendors

4. Test
Sample template for performance testing up to 1m journal lines
Run any document in a manual mode without a connector


COMPARE, e.g. "Why use External integration"

There should be some compare results with the standard Microsoft Dynamics frameworks, there should be some summary page and a more detailed page 
Some ideas for this:
Advantages Over Standard Microsoft Tools

vs. DMF (Data Management Framework):
-Support custom transactions
-Easily link a Document to the Original file 
-Custom Business logic, not linked to data entity
-Native X++ code - no external dependencies
-A standard approach to error types and how to handle them

vs. Business Events
-Data creation timing: document created at the time of export, not at the time of the event  
-Event Frequency and Uniqueness: Messages are unique per document and do not duplicated
-Response Processing: Can process response
-Full logs (BE doesn’t support success logs)

vs. Message Processor
-Enhanced Logging
-Tracing
-Manual message processing 
-Can be run in ttsbegin-ttsabort block for testing scenario
-Processing and format flexibility

Detailed results descibed in blog posts


There should be some use case scenario(as copy of blog post)

Report an issue should recommend create a git hub issue

The main idea should be present a framework and allow one place information regarding it



I don't have detail requirements, what I have now:

Series of blog posts: 

web version: https://denistrunin.com/tags/integration/

Or the copy(source files for the blogs, exactly the same as blog post) are located here, they should have tag integration "C:\GitHub\denistrunin-blog\src\posts"



Can you analyse it, prepare me a list of questions to ask in order to provide a detailed design and implement this site. Files will be on GitHub, hosted probably also on GitHub


some answers:
1. Audience: The landing page should be to ask to try this framework for D365FO developers and technical architects, it is more like a sell, but detailed documentation should point to details, with developers as the primary audience.
2. **What is the primary conversion?** Install the framework,  browse use cases,  contact me. The main purpose to engage people to use this framework

3. Name: `External Integration Module for D365FO`, with `DEVExternalIntegration` used only as the model/code name.
4. Source: this dedicated public repository for this site only; framework code remains in XppTools.
5. Hosting: GitHub Pages; add a custom domain later
6. **Is the site independent community documentation or the official documentation for the framework?** 
this is my framework, the site should be official site with the official documentation for the framework
7.
Should documentation issues and code defects share the XppTools issue tracker? Yes, site just a landing page/documentation, all code related issues should be in XppTools

- Scope: home, why/compare, complete core docs, use-case index, six priority use cases, and support page.
- Blog reuse: rewritten tutorials with links to the original posts.
- Comparison: scenario-based and evidence-linked.
- Support: issue templates in XppTools or the selected code repository; no custom backend.
- Search: yes
- Analytics: can you add google analytics, simplest case
- Language/theme: English

