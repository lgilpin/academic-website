---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Anomaly Detection Through Explanations"
event: "FUZZ-IEEE 2021"
event_url: "https://attend.ieee.org/fuzzieee-2021/leilani-gilpin/"
location: "remote"
address:
  street:
  city:
  region:
  postcode:
  country:
summary: FUZZ-IEEE invited talk
abstract: "Under most conditions, complex systems are imperfect. When errors occur, as they inevitably will, systems need to be able to (1) localize the error and (2) take appropriate action to mitigate the repercussions of that error. In this talk, I present new methodologies for detecting and explaining errors in complex systems. My novel contribution is a system-wide monitoring architecture, which is composed of introspective, overlapping committees of subsystems. Each subsystem is encapsulated in a “reasonableness” monitor, an adaptable framework that supplements local decisions with commonsense data and reasonableness rules. This framework is dynamic and introspective: it allows each subsystem to defend its decisions in different contexts: to the committees it participates in and to itself. For reconciling system-wide errors, I developed a comprehensive architecture that I call “Anomaly Detection through Explanations (ADE).” The ADE architecture contributes an explanation synthesizer that produces an argument tree, which in turn can be traced and queried to determine the support of a decision, and to construct counterfactual explanations. I have applied this methodology to detect incorrect labels in semi-autonomous vehicle data, and to reconcile inconsistencies in simulated, anomalous driving scenarios.

My work has opened up the new area of explanatory anomaly detection, working towards a vision in which complex systems will be articulate by design: they will be dynamic; internal explanations will be part of the design criteria; system-level explanations will be provided, and they can be challenged in an adversarial proceeding."

# Talk start and end times.
#   End time can optionally be hidden by prefixing the line with `#`.
date: 2021-07-14
#date_end: 
all_day: true

# Schedule page publish date (NOT talk date).
publishDate: 2020-02-22T07:48:37-05:00

authors: [Leilani H. Gilpin]
tags: []

# Is this a featured talk? (true/false)
featured: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# youtube: 2lzCO7mHK1Q

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
# links:
# - name: Follow
#   url: https://twitter.com
#   icon_pack: fab
#   icon: twitter

# Optional filename of your slides within your talk's folder or a URL.
url_slides: "files/talks/fuzz_ieee_2021.pdf"

url_code:
url_pdf: 
url_video: 

# Markdown Slides (optional).
#   Associate this talk with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides: ""

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---
