<!-- js is a synchronous and single threaded language -->

<!-- 
    >> firstly do work main stack and then side stack.
    main stack:- in the main stack all synchronous lines of code are executed line by line and after axecuting, lines are removed from main stack
-->

<!-- 
    side stack:- all async lines of code are wait in side stack according to their time period and after completed time period all codes are move in main stack using event loop(side stack se main stack me le jane ka kam) and executeing line by line and after executed all codes are removed from main stack.
-->

<!-- { fetch, axios, promises, settimeout, setinterval etc } those are async, they are sending requests and after all requests are completed and receiving cover by then-catch, async-await, callbacks -->