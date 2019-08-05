Assumptions:

1.) No way of telling what current date is (except from generator, but this date conflicts with orders.json
 data), therefore I will only display orders as either scheduled or completed

2.) I experienced a lot of frustration with the dates, where the order was requested for a certain date
 and time, and delivered 4 hours later but no delay or late reason was reported. Only after I studied the 
 random-generator did I see that this data was not actually consistent


3.) the van marked on the map is the driver's location. I had assumed that current_location was given to 
show the driver on route for the current delivery, however, as the data is inconsistent, I have assumed 
this is the location of the driver for the delivery scheduled in the future only (perhaps if they need to
track him down to fetch the delivery)

4.) With my sort in server.ts, I wanted to sort orders based on how close they are to NOW (current date) 
but due to inconsistent dates I could not do this and opted to sort dates from newest to oldest - this 
makes sense for delivered orders but for scheduled orders it would have been better to sort from closest 
to furthest from current date

Suggestions:

Use dates that make sense. There is a requested delivery date of 2018-06-01 which is in the future 
according to "now" in the random-generator, but there is a delay of 18 minutes due to 
DRIVER_LATE_FOR_PICKUP.. The driver can't be late for a pickup which is scheduled for 1 month in the 
future.

This assignment was very fun, thank you for the challenge!
