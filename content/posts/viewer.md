+++
date = '2025-01-01T15:28:28+08:00'
title = 'Free Online Model Viewer'
+++

Back when I was working in formwork design, a colleague asked if it was possible to allow site personnel to view Revit model without having to use Revit to view them. The problem is not only they do not have a good enough computer to run Revit, they don't even have any Autodesk subscription 😂

The Southeast Asian in me requires me to find a **FREE** solution to this problem. And so I did. 

## Speckle ##

Speckle is founded by gigachads from Arup. Started out as OSS, now they have raised millions for this project. Many use this platform for its interoperability tools, git-like data platform, and also their model viewer.

Extra point for Speckle, we can embed the viewer app to any static site, like Notion. 

<iframe
  src="https://speckle.xyz/projects/00421d8462/models/3fc58cb5ee@55506d896d#embed={%22isEnabled%22:true,%22hideControls%22:true,%22hideSelectionInfo%22:true,%22manualLoad%22:false}"
  width="100%"
  height="600"
  frameborder="0"
  allowfullscreen>
</iframe>

## Autodesk Docs ##

It's interesting to me that Autodesk do not market this feature enought to their users. I wonder why...

In our context, it ticks the "free" solution requirement because our site personnel do not require extra Autodesk subscription. Each of our designers have Docs feature with their subscription for free.

It's interesting to me that Autodesk do not market this feature enought to their users. I wonder why... But hey, so long as it works, there is not much to complain. The only drawback to this method is there is not direct approach for us to embed the viewer to any static site.

Not a fan of Speckle viewer? Navigate this model in Autodesk Viewer: https://autode.sk/3rdOqrs

## Looking back... ##
I'm editing this post in 2025. These two methods should still work but new development with OpenComponents (formerly IFC.js) opens up much more options for model viewer apps. Check them out! https://github.com/ThatOpen