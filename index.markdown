---
layout: default
---

<!-- ========================================================================= -->
<!-- Contact and Introduction Section -->
<!-- ========================================================================= -->
<div class="contact-header">
  <img src="/assets/images/{{ site.data.resume.contact.icon }}" alt="Profile Picture" class="profile-pic">
  <div class="contact-info">
    <h1>{{ site.title }}</h1>
    <!-- <p><strong>{{ site.data.resume.contact.pos }}</strong></p>
    <p>{{ site.data.resume.contact.addr }}</p> -->
    <!-- <p><strong>Email:</strong> <a href="mailto:{{ site.data.resume.contact.email | replace: ' AT ', '@' | replace: ' dot ', '.' }}">{{ site.data.resume.contact.email | replace: ' AT ', '@' | replace: ' dot ', '.' }}</a></p> -->
  </div>
</div>

<p>{{ site.data.resume.contact.intro }}</p>

<!-- ========================================================================= -->
<!-- Education Section -->
<!-- ========================================================================= -->
## Education

### {{ site.data.resume.contact.name_phd_univ }}
<div class="detail-line">
  <span><b>Ph.D. Student</b> <em>{{ site.data.resume.contact.dep_phd_univ }}</em></span>
  <span><strong>{{ site.data.resume.contact.start2end_phd }}</strong></span>
</div>
<div class="detail-line">
  
</div>


### {{ site.data.resume.contact.name_bs_univ }}
<div class="detail-line">
  <span><b>B.S.</b> <em>{{ site.data.resume.contact.dep_bs_univ }}</em></span>
  <span><strong>{{ site.data.resume.contact.start2end_bs }}</strong></span>
</div>
<div class="detail-line">
  
</div>
<!-- ========================================================================= -->
<!-- News Section -->
<!-- ========================================================================= -->
<!-- ## News
<ul>
{% for item in site.data.resume.news %}
  <li>{{ item.title }}</li>
{% endfor %}
</ul> -->

<!-- ========================================================================= -->
<!-- Publications Section -->
<!-- ========================================================================= -->
## Publications
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

<!-- ========================================================================= -->
<!-- Honors & Awards Section -->
<!-- ========================================================================= -->
## Honors & Awards
<ul>
{% for honor in site.data.resume.honors %}
  <li>{{ honor.title }}</li>
{% endfor %}
</ul>

<!-- ========================================================================= -->
<!-- Teaching Section -->
<!-- ========================================================================= -->
## Teaching & Serving
<ul>
{% for ta in site.data.resume.teaching %}
  <li>{{ ta.title }}</li>
{% endfor %}
</ul>