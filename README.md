Building Realtime Applications with Meteor
==========================================

_with Tom Coleman & Daryl Antony_

### Tom

@tmeasday - http://tom.thesnail.org<br>
http://themeteorbook.com<br>
Percolate Studio

### Daryl

Common Code - http://commoncode.com.au

Python/Django/JS in Melbourne

@darylantony @commoncode

#### Code Shop
114 Hoddle Street<br>
Abbotsford, Melbourne

Free coffee to any Code Shop visitors from CampJS :)

----

## Overview of Meteor

+ http://meteor.com/
+ 001 Pure JavaScript.
Write your entire app in pure JavaScript. All the same APIs are available on the client and the server — including database APIs! — so the same code can easily run in either environment.
+ 002 Live page updates.
Just write your templates. They automatically update when data in the database changes. No more boilerplate redraw code to write. Supports any templating language.
+ 003 Clean, powerful data synchronization.
Write your client code as if it were running on the server and had direct access to the database. No more loading your data from REST endpoints.
+ See http://docs.meteor.com/


Mello from the ground up
========================

__A Realtime Trello like app in Meteor__

## Overview

_Building an application with Meteor – "Mello from the ground up"_

+ Meteor Development patterns
+ Packages
+ Collections
+ Templates
    - helpers
    - events
+ Session
+ Accounts
+ Timers
+ Methods
+ Subscriptions
    - Publish & Subscribe
+ Security


Watch while we develop
----------------------

+ Everybody open their laptop browsers to: http://simba.local:3000/

### To run meteor and see the code

    $ curl https://install.meteor.com | /bin/sh
    $ git clone git@github.com:commoncode/mello.git
    $ cd mello
    $ meteor
    Running on: http://localhost:3000/


Install Meteor
--------------

+ Installed Meteor
+ Added packages
    - stylus
    - bootstrap


Create HTML
-----------

+ app boilerplate HTML
+ add stylus
+ add styles


Template Helpers
----------------

+ Create our first Helpers
    - static Lists & Tasks


Meteor Collections
------------------

+ Create Collections
    - add data
    - ask about the 'lib' directory
    - Meteor collections correspond to Mongo collections
    - Comment/ask about Meteor collections
        + Isn't this insecure? (subset)
+ Wire Collections to Helpers
+ Client Console & Collections
    - show reactivity


Template Events
---------------

+ Capture event to manipulate data
    - move Task between Lists


Meteor Session
--------------

+ Using sessions to show state for the current user only
+ Edit mode for Tasks
    - add, delete, modify
    - title, description
+ Hot code reload vs. Browser reload
    - Browser reload?
    - The right way to code in Meteor?
        + Any 'state' not tied to the url _should_ be stored in the Session?
            - Because hot code reloads can happen at anytime
            - Server-side rendering?


Accounts UI
-----------

+ Lets sign in
    - invite audience to sign in
+ Online Presence
    - Meteor.method
        + define methods that run on the server, called by the client
    - Meteor.call
    - Meteor.setInterval
    - Meteor.user()
        + user.profile?
    - Meteor.userId()
    - Meteor.users
+ Assign responsibility for tasks
    - All tasks, My tasks

What we haven't covered?
------------------------

+ insecure
+ subscriptions
+ latency compensation
    - deny






