---
title: Code For Non Technicals.
date: 2019-09-22
path: /blog/code-for-non-technicals
author: Luis Torruella
summary: If you are like me you tend to try to prioritize whats important family, friends,  goals, traveling and (smirk) eating lots of pizza. This are great things and they should be at the top of our list they make life worth living. But as time passes you may have realize that every day more and more people (specially those clever marketers) are pushing "Learn to code" or "Coding is the future" and you know what. They are not wrong!!
---


# Code For Non Technicals

If you are like me you tend to try to prioritize whats important family, friends,  goals, traveling and (smirk) eating lots of pizza. This are great things and they should be at the top of our list they make life worth living. But as time passes you may have realize that every day more and more people (specially those clever marketers) are pushing "Learn to code" or "Coding is the future" and you know what. They are not wrong!! I mean we need to learn to understand whats coming to make better decisions and what not. Long time ago I decided to learn to code and it change my life and this helps me create lots of value in the market. Its a great feeling, I won't lie. But, great things are expensive and coding is no exception. When I say expensive I don't mean money, sure there is boot camps, universities and courses but more than that coding is mentally and time expensive and welllll... that's just the reality. Wrapping your head around how code works is a very very challenging task. I know this because I was there trying to figure out a way how to combine the ins and out of the programming spectrum. Sometimes I get a call from a recruiter throwing lingo at me that unfortunately in my opinion seem to be confused about. Thats' not a bad thing it's a crazy fast passé world and we need to adapt. And I'm not the only one, I tend to teach people the basics of code and one of the questions that I get a lot is "what is the difference between the back and the front end". Good, let's start there.

# From The Front To The Back.
The Front- In my opinion the front is the most challenging but for you the non technical will be the easiest to see, because you see it everyday. When you interact with a device no matter the device you are interacting with what is know as the USER INTERFACE!!! or UI for short. The user interface allows you to give the device inputs(take a picture, write a tweet, etc) and afterwards this one gives you an output(the picture, the tweet, etc). The things that you see and you interact with is known as the "FRONT END". The front in the web is mainly written with three languages HTML, CSS and JavaScript. In the upcoming articles I will write more in depth about them and I will consider making videos explaining them, but for now I will keep it simple. If you were to look at Web codes you will find little things that look like this:

	 <h2> My Favorite TV Show is Game of Thrones </h2>
	
Looking at this nerdy thing I will bet that you would only understand whats italicized and that's okay, I mean you already understand letter and words that's how you understand this article, haha. Moving on, this is a documented language know as HTML or Hyper Text Markup Language if you want to impress your friends. It was create a long time ago in 1990 AD, very prehistoric. Anyway it looks challenging to look in the beginning but if you break it down is quite easy. The bold "<h2>" and "</h2>" are known as tags, they come in many flavors(h1, a, div, etc) but that's not important right now, let's focus in breaking down their anatomy. The tags have an opening "<h2>" where it... well... opens then you insert the "content" in my case is "My Favorite TV Show is Game of Thrones" you close it with "</h2>" that little slash is the difference between closing and opening. When this is written your page renders:
My Favorite TV Show is Game of Thrones
Simple, right? Let's kick it up a notch. This is how we block the content on the web using this tags. You can add an array of content from text to images to anyone on the world with this language. Remember when I said that they came in many flavors? Well those flavors is what allows us to add said difference arrays of content. If you want to insert an image for example you add the "<img src="http://imagesource.location.com">" tag and add the "source" insides of the tag which is  abbreviated 'src=' and with double quotes you add the location of the image.

Okay. That's how you create document but how you make them beautiful? If you do everything in HTML you will noticed everything looks unattractive, Therefore we created a language for that is called CSS or Cascade Style Sheets to impress your next date. It was released in 1996 with the intent to separate the presentation and the content. What does this mean LUIS?. Glad you asked a regular html looks like this.


```
	<!DOCTYPE html>
	<html lang="en">
	<head>
	    <meta charset="UTF-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	    <meta http-equiv="X-UA-Compatible" content="ie=edge">
	    <title>Document</title>
	</head>
	<body>
	    <h2>My Favorite Show is Game of Thrones</h2>
	    <div>
	        <img
	        height="250px"
	         src="http://is1.mzstatic.com/image/thumb/Music69/v4/8a/24/25/8a242556-7161-8ebe-3562-10d14222e832/source/3000x3000sr.jpg"/>
	        <h3>Game Of Thrones Season One Episodes:</h3>
	        <ul>
	            <li>Winter is Coming</li>
	            <li>The Kignsroad</li>
	            <li>Lord Snow</li>
	            <li>Cripples, Bastards and Broken Things</li>
	            <li>The Wolf and the Lion</li>
	            <li>A Golden Crown</li>
	            <li>You Win or You Die</li>
	            <li>The Pointy End</li>
	            <li>Baelor</li>
	            <li>Fire and Blood</li>
	        </ul>
	    </div>
	</body>
	</html> 
```


Remember we have all the tags with different flavors wrapping our desired content. So far so good. Where does CSS come into play and why is it important. Well, look at this results.

-- Image ---

We can do something about this in HTML, we just add more features into the tag or tags themselves.
For example let's say you want to change the font of our H2.
<h2> My Favorite Show is Game of Thrones </h2>

You will have to something very strange. Where you need to add another tag. It looks like this.

<h2> <font face="verdana">My Favorite Show is Game of Thrones</font> </h2>

We had to add yet another tag to change the font. How about the color? 
To change the color you will have to go to the tag itself and add the color.

<h2> My Favorite Show is Game of Thrones </h2>

Once you add the color
<h2 color="red"> My Favorite Show is Game of Thrones </h2>

At this point you may thing, why do I need CSS of you can do all this things in HTML. Glad you asked. In a simple document like this we don't have that many settings and we don't need too much. But let's say it get's M A S S I V E the document becomes a really hard to manage and change things. Just imagine changing one tag at a time. Second. HTML has limitations. CSS doesn't.s