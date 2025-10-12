---
layout: default
---

<!-- ========================================================================= -->
<!-- Contact and Introduction Section (This part remains single-column) -->
<!-- ========================================================================= -->
<!-- ========================================================================= -->
<!-- NEW Contact and Introduction Section -->
<!-- ========================================================================= -->

<!-- 1. Name is now on its own, centered or left-aligned -->
<h1 class="main-name">{{ site.title }}</h1>

<!-- 2. A new container for the side-by-side layout -->
<div class="bio-container">

  <!-- Left Item: Profile Picture -->
  <img src="/assets/images/{{ site.data.resume.contact.icon }}" alt="Profile Picture" class="profile-pic">

  <!-- Right Item: Intro text and other details -->
  <div class="bio-content">
    <div class="intro-text">
      {{ site.data.resume.contact.intro | markdownify }}
    </div>
  </div>

</div>

<hr class="section-divider">

<!-- ========================================================================= -->
<!-- Education Section (New two-column layout starts here) -->
<!-- ========================================================================= -->
<div class="section-container">
  <div class="section-title">
    <h2>Education</h2>
  </div>
  <div class="section-content">
    {% for entry in site.data.resume.education %}
      <h3>{{ entry.university }}</h3>
      <div class="detail-line">
        <span><b>{{ entry.degree }}</b> <em>{{ entry.department }}</em></span>
        <span><strong>{{ entry.period }}</strong></span>
      </div>
      <div class="detail-line">
        <span></span>
      </div>

      <!-- Add a spacer between entries, but not after the last one -->
      {% unless forloop.last %}
        <div class="spacer"></div>
      {% endunless %}
    {% endfor %}
  </div>
</div>
<!-- ========================================================================= -->
<!-- News Section -->
<!-- ========================================================================= -->
<!-- <div class="section-container">
  <div class="section-title">
    <h2>News</h2>
  </div>
  <div class="section-content">
    <ul>
    {% for item in site.data.resume.news %}
      <li>{{ item.title }}</li>
    {% endfor %}
    </ul>
  </div>
</div> -->

<!-- ========================================================================= -->
<!-- Publications Section -->
<!-- ========================================================================= -->
<div class="section-container">
  <div class="section-title">
    <h2>Publications</h2>
  </div>
  <div class="section-content">
    <div class="publications">
    {% for pub in site.data.resume.pubs %}
      <div class="publication-item">
        <p><strong><a href="{{ pub.link }}" target="_blank">{{ pub.title }}</a></strong></p>
        <p>
          {% for author_entry in pub.authors %}
            {% if author_entry.author contains site.data.resume.contact.name %}
              <strong><u>{{ author_entry.author }}</u></strong>{% unless forloop.last %}, {% endunless %}
            {% else %}
              {{ author_entry.author }}{% unless forloop.last %}, {% endunless %}
            {% endif %}
          {% endfor %}
        </p>
        <p><em>{{ pub.pubname }} ({{ pub.pubnamebrief }})</em>, {{ pub.year }}.</p>
      </div>
    {% endfor %}
    </div>
  </div>
</div>

<!-- ========================================================================= -->
<!-- Honors & Awards Section -->
<!-- ========================================================================= -->

<div class="section-container">
  <div class="section-title">
    <h2>Contests</h2>
  </div>
  <div class="section-content">
    <ul>
    {% for contest in site.data.resume.contests %}
      <li><b>{{ contest.prize }}</b>, {{ contest.title }}, {{ contest.year }}</li>
    {% endfor %}
    </ul>
  </div>
</div>

<div class="section-container">
  <div class="section-title">
    <h2>Honors</h2>
  </div>
  <div class="section-content">
    <ul>
    {% for honor in site.data.resume.honors %}
      <li>{{ honor.title }}</li>
    {% endfor %}
    </ul>
  </div>
</div>

<!-- ========================================================================= -->
<!-- Teaching Section -->
<!-- ========================================================================= -->
<div class="section-container">
  <div class="section-title">
    <h2>Teaching</h2>
  </div>
  <div class="section-content">
    <ul>
    {% for ta in site.data.resume.teaching %}
      <li>{{ ta.title }}</li>
    {% endfor %}
    </ul>
  </div>
</div>