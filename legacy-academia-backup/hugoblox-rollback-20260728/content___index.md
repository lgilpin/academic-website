---
title: ''
summary: ''
date: 2026-07-28
type: landing

sections:
  - block: resume-biography-3
    content:
      username: leilani
      text: ''
      button:
        text: Download CV
        url: files/cv.pdf
      headings:
        about: ''
        education: Education
        interests: Interests
    design:
      background:
        gradient_mesh:
          enable: true
      name:
        size: md
      avatar:
        size: large
        shape: circle

  - block: markdown
    content:
      title: Research
      text: |-
        I am an Assistant Professor in [Computer Science and Engineering](https://engineering.ucsc.edu/departments/computer-science-and-engineering)
        and an affiliate of the [Science & Justice Research Center](https://scijust.ucsc.edu/about-sjrc/)
        at [UC Santa Cruz](https://www.ucsc.edu/). I am part of the
        [AI group at UCSC](https://ucsc-ai.github.io/) and lead the
        [AI Explainability and Accountability (AIEA) Lab](https://aiea-lab.github.io/).

        My research focuses on theories and methods for monitoring, designing,
        and augmenting complex machines that can explain themselves for
        diagnosis, accountability, and liability.
    design:
      columns: '1'

  - block: markdown
    id: news
    content:
      title: News
      text: |-
        <!-- ORG_NEWS_BEGIN -->
        * **July 2026**: Testing that this is at ICML and here.
        * **December 2024**: I gave the [NAI Seminar talk](https://www.youtube.com/channel/UC9-EiFD_OQ0XFBNM5EYbnEg).
        * **November 2024**: I will be general chair of the [19th Conference on Neurosymbolic Learning and Reasoning (NeSy 2025)](https://2025.nesyconf.org/).
        * **September 2024**: Two papers were accepted as posters to NeurIPS!
        * **August 2024**: I attended the Science for the People symposium at UC Berkeley.
        * **July 2024**: I attended the [UCSC–IIT Summer Research Symposium](https://news.ucsc.edu/2024/08/iit-research-symposium.html) at UCSC.
        * **May 2024**: I attended the [BIAS Project](https://www.biasproject.eu/) meeting.
        * **April 2024**: I gave an invited talk at Pomona College and participated in the Inspire: AI panel with Chancellor Larive, Prof. Yang Liu, and Zac Zimmer. [Video here](https://youtu.be/pMZk5SYViz4?si=OAhwZus0L2TDg_pD).
        * **March 2024**: I attended a Dagstuhl seminar on [Trustworthiness and Responsibility in AI – Causality, Learning, and Verification](https://www.dagstuhl.de/seminars/seminar-calendar/seminar-details/24121).
        * **December 2023**: I was awarded the Air Force Office of Scientific Research [Young Investigator Program (AFOSR YIP)](https://www.afrl.af.mil/News/Article-Display/Article/3625080/afosr-awards-215m-to-scientists-engineers-via-young-investigator-program/) grant.
        * **October 2023**: Our paper “Towards a Fuller Understanding of Neurons with Clustered Compositional Explanations” was accepted as a poster at NeurIPS.
        * **September 2023**: Our workshop on explainable AI approaches for deep reinforcement learning, [XAI4DRL](https://xai4drl.github.io/), was accepted to AAAI. It is co-organized with Roberto Capobianco, Oliver Chang, Biagio La Rosa, Michela Proietti, and Alessio Ragno.
        <!-- ORG_NEWS_END -->
    design:
      columns: '1'

  - block: collection
    id: publications
    content:
      title: Publications
      filters:
        folders:
          - publication
        exclude_featured: false
    design:
      view: citation

  - block: collection
    id: projects
    content:
      title: Projects
      filters:
        folders:
          - project
    design:
      view: article-grid
      columns: 3

  - block: collection
    id: talks
    content:
      title: Talks
      filters:
        folders:
          - talk
    design:
      view: card

  - block: markdown
    id: teaching
    content:
      title: Teaching
      text: |-
        ## Lead Instructor

        - UCSC
          - CSE 140: Artificial Intelligence
          - CSE 240: Artificial Intelligence
          - CSE 246: Responsible Data Science

        ## Selected Lectures

        - Stanford CS 520: [Knowledge Graphs](https://web.stanford.edu/class/cs520/)
        - MIT 6.905/6.945: [Large-scale Symbolic Systems](https://groups.csail.mit.edu/mac/users/gjs/6.945/)
    design:
      columns: '1'

  - block: markdown
    id: contact
    content:
      title: Contact
      text: |-
        **Email:** [lgilpin@ucsc.edu](mailto:lgilpin@ucsc.edu)

        **Office:** Engineering 2, Office 347B, UC Santa Cruz

        [Book an appointment](https://calendar.app.google/k9Z5kyiajZnZucYGA)

        <iframe title="Map showing Engineering 2 at UC Santa Cruz"
        src="https://www.google.com/maps?q=Engineering+2,+UC+Santa+Cruz,+Santa+Cruz,+CA&output=embed"
        width="100%" height="420" style="border:0" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
    design:
      columns: '1'
---
