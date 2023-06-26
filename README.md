# Welcome to the Pokemon PC!

## Description

This Project is supposed to mimic a pokemon personal computer. In every pokemon game every pokemon trainer gets access to a personal computer where they can store pokemon. The pokemon personal computer can also change the names, upgrade levels, and change skills. This is project connects to SQlite 3 database to hold all the info of the pokemon and skills.

Upon loading into the web app there is going to be two tabs in the Navbar.

### Add Pokemon

In this tab you can add your favorite pokemon by getting an image of them and giving them a name and level. The pokemon's level, name, and image can be changed later! So no need to stay on this tab for long just try adding a couple of your favorite pokemon!

### Pokemon List 

In this tab is where all the magic happens! So here we have a list of all the pokemon you added in the Add Pokemon tab. There are a couple of new fetures that you are going to notice. 

With each Pokemon you can click the Edit Pokemon button to edit the pokemon's name, level, and image. You can also release them as well BUT once a pokemon is released you cannot undo it and you would have to add them back through the Add Pokemon tab.

Each pokemon also has skills. If you click on the Add Skill Button you can make a skill for that pokemon. Every skill added must have a name, power points, and a description. For those who don't know power points is how many times a pokemon can use a skill. Upon adding a skill if you click the skill button you can see all the pokemon's skills.

Every pokemon skill listed after clicking the skill button can be edited or deleted. WARNING after a skill is deleted there is no undo and must be added back via Add Skill button.

I created a video to explain all the fetures in real time 
https://www.youtube.com/watch?v=7zRZlmuRkgw


## Installation

This project has both a front-end and back-end

### Front End

For the front end it runs on the lastest version of React

To get the front end up and running it will need to be cloned into your computer and then once that is done you will need to run the following code in a terminal

npm start

Once that is runned the web app will open up.

### Back End

The back end runs using the latest version of Ruby/Sinatra/ActiveRecord/SQlite3

To get the back end up and running you will need to run bundle install to install all the dependencies. After that all you have to do is run bundle exec rake server to get the server up and running.

## Support

If there are any queastions you can reach me via email at
adrianvalverde45@gmail.com

## License

MIT License

Copyright (c) [2023] [Adrian Valverde]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
