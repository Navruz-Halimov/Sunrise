<template>
  <footer class="footer">
    <b-container>
      <b-row>
        <b-col lg="4">
          <div class="logo">
            <nuxt-link to="/" class="footer__logo"><img src="../assets/images/logo.png" alt=""></nuxt-link>
            <a href="tel:998 71 289 56 66" class="footer__phone-link"
            >
              <font-awesome-icon :icon="['fas', 'phone']"/>
              8 71 289 56 66</a
            >
            <div class="footer__address">
              <font-awesome-icon :icon="['fas', 'map-marker']"/>
              1 Mirzo Ulug'bek shoh ko'chasi, Тошкент
            </div>
            <nuxt-link class="footer__email" to="mailto:info@yourdomain.com">
              <font-awesome-icon :icon="['fas', 'envelope']"/>
              info@yourdomain.com
            </nuxt-link>
          </div>
        </b-col>
        <b-col lg="4">
          <h4 class="footer__heading">{{$t('footer.quicklink')}}</h4>
          <div class="footer__menu">
            <ul class="footer__list">
              <li class="footer__item">
                <nuxt-link :to="localePath('/')">{{$t('navbar.home')}}</nuxt-link>
              </li>
              <li class="footer__item">
                <nuxt-link :to="localePath('/booking')">{{$t('navbar.book')}}</nuxt-link>
              </li>
              <li class="footer__item">
                <nuxt-link :to="localePath('/offer')">{{$t('navbar.offer')}}</nuxt-link>
              </li>
              <li class="footer__item">
                <nuxt-link :to="localePath('/rooms')">{{$t('navbar.rooms')}}</nuxt-link>
              </li>
              <li class="footer__item">
                <nuxt-link :to="localePath('/events')">{{$t('navbar.events')}}</nuxt-link>
              </li>
            </ul>
            <ul class="footer__list">
              <li class="footer__item">
                <nuxt-link :to="localePath('/gallery')">{{$t('navbar.gallery')}}</nuxt-link>
              </li>
              <li class="footer__item">
                <nuxt-link :to="localePath('/amenties')">{{$t('navbar.amenties')}}</nuxt-link>
              </li>
              <li class="footer__item">
                <nuxt-link :to="localePath('/attractions')">{{$t('navbar.nearby')}}</nuxt-link>
              </li>
              <li class="footer__item">
                <nuxt-link :to="localePath('/contact')">{{$t('navbar.contact')}}</nuxt-link>
              </li>
              <li class="footer__item">
                <nuxt-link :to="localePath('/reviews')">{{$t('navbar.reviews')}}</nuxt-link>
              </li>
            </ul>
          </div>
        </b-col>
        <b-col lg="4">
          <h4 class="footer__motto-heading">{{$t('footer.voc')}}</h4>
          <div class="footer__motto">{{$t('footer.motto')}}
            <nuxt-link :to="localePath('/contact')">{{$t('footer.readmore')}}
              <font-awesome-icon :icon="['fas', 'angle-right']"/>
            </nuxt-link>
          </div>
          <h4 class="social__networks-heading">{{$t('footer.connect')}}</h4>
          <ul class="social__networks">
            <li class="social__networks-item">
              <a href="#" class="facebook"></a>
            </li>
            <li class="social__networks-item">
              <a href="#" class="instagram"></a>
            </li>
            <li class="social__networks-item">
              <a href="#" class="linkedin"></a>
            </li>
            <li class="social__networks-item">
              <a href="#" class="twitter"></a>
            </li>
            <li class="social__networks-item">
              <a href="#" class="youtube"></a>
            </li>
            <li class="social__networks-item">
              <a href="#" class="telegram"></a>
            </li>
          </ul>
        </b-col>
      </b-row>
      <b-row class="footer__end mt-5">
        <b-col class="p-0" cols="12" lg="12">
          <ul>
            <li><a @click.prevent="showModal('privacy')" href="#">Privacy Policy</a> |</li>
            <li><a @click.prevent="showModal('terms')" href="#">Terms & Conditions</a> |</li>
            <li><a @click.prevent="showModal('cookie')" href="#">Cookie Center</a> |</li>
            <li><a @click.prevent="showModal('security')" href="#">Security & Safety</a> |</li>
            <li><a @click.prevent="showModal('information')" href="#">Do Not Sell My Personal Information</a> |</li>
            <li><a>Copyright © 2020 All rights reserved.</a></li>
          </ul>
        </b-col>
      </b-row>
      <div v-if="footerModal" class="footer__modal">
        <button @click="hideModal()" type="button" class="close">
          <i></i>
          <i></i>
        </button>
        <div class="footer__text">
          <div v-if="privacy" class="privacy">
            <h4>Sunrise Privacy Policy</h4>
            <span>1 Introduction</span>
            <p>We are committed to safeguarding the privacy of the personal information that we gather concerning our
              prospective, current and former employees (“you” or “employees”) for management, human resources and
              payroll purposes.</p>
            <p>As a Hyatt employee (or prospective employee), you understand and acknowledge that we collect, use and
              disclose your personal information in accordance with this Privacy Policy for Employees (this
              “Policy”).</p>
            <span>2 The Application of this Policy</span>
            <p>This Policy applies to employees’ personal information and to the use of that personal information in any
              form, whether oral, electronic and/or written. This Policy applies unless there is a specific
              country/region privacy policy for you based on your citizenship/residency or if the Hyatt Location (as
              defined below) is in such country/region.</p>
            <p>This Policy gives effect to Hyatt’s commitment to protect your personal information and has been adopted
              by all of the separate and distinct legal entities that manage, operate, franchise, own and/or provide
              services to the locations operating under or in connection with the Hyatt®”, Park Hyatt®, Miraval®,
              exhale®, Grand Hyatt®, Hyatt Regency®, Andaz®, Hyatt Centric®, The Unbound Collection by Hyatt®, Hyatt
              Place®, Hyatt House®, Hyatt Ziva, Hyatt Zilara or Hyatt Residence Club® brands around the world, including
              independently branded locations affiliated with Hyatt (individually, a “Hyatt Location”) and collectively,
              the “Hyatt Locations”). Those entities include Hyatt Hotels Corporation, its direct and indirect
              subsidiaries, and all of the separate and distinct legal entities that own the individual Hyatt Locations
              worldwide. References to “Hyatt”, “we” and “our” throughout this Policy, depending on the context,
              collectively refer to those separate and distinct legal entities, including the entity with which you have
              or may have an employment relationship.</p>
            <p>Your personal information will be processed by the entity with which you have or may have an employment
              relationship for the purposes set out in Section 4 below. Your personal information may be disclosed to
              the other entities listed above for human resources administration purposes.</p>
            <p>While this Policy is intended to describe the broadest range of our personal information processing
              activities globally, those processing activities may be more limited in some jurisdictions based on the
              restrictions of their laws. For example, the laws of a particular country may limit the types of personal
              information we can collect or the manner in which we process that personal information. In those
              instances, we adjust our internal policies and/or practices to reflect the requirements of local law.</p>
            <p>If you agree to this Policy you are, to the extent required under local law in some jurisdictions,
              granting your express and written consent to the processing of any personal information that you provide
              Hyatt that is considered to be Sensitive Personal Information (as described in Section 3) or is considered
              to be financial information.</p>
            <span>3 The Types of Personal Information We Process</span>
            <p>The term “personal information” in this Policy refers to information that identifies or is capable of
              identifying you as an individual. The types of personal information that we process (which may vary by
              jurisdiction based on applicable law and the nature of the employee’s position and duties) include:</p>
          </div>
          <div v-if="terms" class="terms">
            <h4>Sunrise Terms & Conditions</h4>
            <p>Welcome to the Terms & Conditions of Use for this web site and/or mobile application (the “Site”). Your
              use of the Site is subject to these Terms & Conditions along with any specific terms and conditions set
              forth on the individual pages within the Site (collectively, the “Terms & Conditions”) and all applicable
              laws and regulations, including those regarding copyright, trademark, and other intellectual property
              rights. Your submission of information on the Site is subject to Hyatt’s Global Privacy Policy for Guests
              which is hereby incorporated into these Terms & Conditions.</p>
            <p>The Site offers information on properties managed, franchised, owned, licensed, or developed by
              affiliates of Hyatt Hotels Corporation. As used throughout the Site, the terms “Hyatt,” “the Company,”
              “our,” “we,” “us,” and other similar terms may refer to one or more of Hyatt Hotels Corporation, Hyatt
              Corporation, Hyatt International Corporation, Select Hotels Group, LLC, or one or more of their direct or
              indirect subsidiaries or affiliates. These terms are used for convenience only and are not intended as a
              precise designation of any one particular entity.</p>
            <p>PLEASE READ THE TERMS & CONDITIONS CAREFULLY BEFORE DOWNLOADING, USING OR OBTAINING ANY MATERIALS,
              INFORMATION, PRODUCTS OR SERVICES THROUGH THE SITE. BY ACCESSING THE SITE (and/or downloading a mobile
              application offered by Hyatt), YOU AGREE TO ACCEPT, WITHOUT LIMITATION OR QUALIFICATION, ALL OF THE TERMS
              & CONDITIONS. We reserve the right to change, update, or correct any of the Terms & Conditions or any
              information contained in the Site at any time without notice by posting amended terms to the Site. Your
              continued use of the Site means that you accept and agree to the revised Terms & Conditions. If you do not
              accept these Terms & Conditions (as amended from time to time), please exit the Site immediately.</p>
            <p></p>
          </div>
          <div v-if="cookie" class="cookie">
            <h4>Cookie Center</h4>
            <p>We may use cookies and related technologies to recognize you and receive information about your activity
              on
              our websites. This helps customize content and show you more relevant ads. Click on the different options
              below to manage your cookie preferences. Under the California Consumer Privacy Act (“CCPA”), a “sale” of
              personal information may occur when personal information is transferred to a third party for any form
              consideration. The use of certain cookies may be viewed as a “sale” under the CCPA. As described in our
              Privacy Policy, California residents can request to opt-out of the sale of their personal information to a
              third party by visiting our Do Not Sell My Personal Information page. To exercise your “Do Not Sell My
              Personal Information” right with respect to cookies, you can adjust your Targeted Advertising Cookies and
              other cookie preferences below. Choices you make regarding cookies are website, device, and browser
              specific, and are deleted whenever you clear your browser’s cache. This means you need to adjust your
              cookie
              preferences on each website, device, and browser you use. <a href="#"> For more information, see our
                Privacy
                Policy</a></p>
            <h4>Manage Cookie Preferences</h4>
            <h6>Targeted Advertising Cookies
              <!--              <b-form-checkbox switch size="lg"/>-->
            </h6>
            <p>
              <span>
                Targeting Cookies
                <!--                <b-form-checkbox switch size="lg"/>-->
              </span>
              <span>These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites.  These cookies are based on identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising, but you will continue to receive non-targeted or contextual advertising.</span>
              <span>
                Social Media Cookies
                <!--                <b-form-checkbox switch size="lg"/>-->
              </span>
              <span>These cookies are set by social media services that we have added to the site to enable you to share our content with your friends and networks. They are capable of tracking your browser across other sites and building a profile of your interests. This personalization may influence the content and messages you see on other websites you visit. If you do not allow these cookies, you may not be able to use or see these social media sharing tools.</span>
              <span>
                Functional Cookies
                <!--                <b-form-checkbox switch size="lg"/>-->
                </span>
              <span>These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third party providers whose services we have added to our pages. If you do not allow these cookies then some or all of these services may not function properly.</span>
            </p>
            <h6>Performance Cookies
              <!--              <b-form-checkbox switch size="lg"/>-->
            </h6>
            <p>These cookies allow us to count visits and traffic sources so we can measure and improve the performance
              of our site. They help us to know which pages are the most and least popular and see how visitors move
              around the site. If you do not allow these cookies, we will not know when you have visited our site, and
              we will not be able to monitor its performance in the course of your interactions with the site.</p>
            <h6>Strictly Necessary Cookies <b>Always Active</b></h6>
            <p>These cookies are necessary for the website to function and cannot be switched off in our systems. They
              are usually set in response to actions made by you which amount to a request for services, such as setting
              your privacy preferences, logging in or filling in forms. You can set your browser to block or alert you
              about these cookies, but some parts of the site will not then work.</p>
          </div>
          <div v-if="security" class="security">
            <h4>Security & Safety</h4>
            <p>Hotels managed by Hyatt Hotels & Resorts consider guest comfort and security as our priority,
              particularly when faced with today's global security challenges. We would like to share with you some of
              the proactive security programs that are integral to the operations of our hotels.</p>
            <ul>
              <li>Trained hotel staff responsible and accountable for looking after the security and well being of our
                guests and visitors
              </li>
              <li>Advanced security technologies to facilitate safeguarding your security, such as; integrated
                surveillance systems, advanced lock and access control systems, and sophisticated asset protection tools
              </li>
              <li>Rigorous security and safety assessments and reviews</li>
              <li>Dedicated Fire/Life/Safety systems and monitoring.</li>
              <li>Comprehensive emergency response plans that staff are regularly trained on.</li>
            </ul>
            <p>Sunrise Hotels & Resorts are renowned for our authentic hospitality and our personalized guest
              experience.
              As our valued guest, we are committed to creating an environment of security and well being throughout
              your stay.</p>
          </div>
          <div v-if="information" class="information">
            <h4>Do Not Sell My Personal Information</h4>
            <p>California residents have the right to opt out of the sale of their personal information to third
              parties. To learn about what personal information we collect, our use and sharing of it and about our
              privacy practices, please review our Privacy Notice. </p>
            <p>To manage your preferences for information collected from your browser as you use our website, please
              review the Cookie Consent tool. Even if you initially consented to such activity and transfer of any
              information to third parties, you may manage your preferences there or by contacting certain publishers
              directly, including Google and Adobe. You can also learn about exercising choices about information
              collected about your online activities over time and across third-party websites or services by visiting
              www.aboutads.info and www.networkadvertising.org.
              To opt out of your information being sold to third parties, please either: complete the form below, email
              privacy@wyndham.com or call 1-866-554-1236 and provide the following: First Name, Last Name, Mailing
              Address, Email Address, Phone Number, and Wyndham Rewards Account Number (if applicable).</p>
          </div>
        </div>
      </div>
    </b-container>
  </footer>
</template>
<script>
  export default {
    data() {
      return {
        footerModal: false,
        privacy: false,
        terms: false,
        cookie: false,
        security: false,
        information: false
      }
    },
    methods: {
      showModal(e) {
        this.footerModal = true
        if (e === 'privacy') {
          this.privacy = true
          this.cookie = false
          this.terms = false
          this.security = false
          this.information = false
        }
        if (e === 'cookie') {
          this.cookie = true
          this.privacy = false
          this.terms = false
          this.security = false
          this.information = false
        }
        if (e === 'terms') {
          this.terms = true
          this.privacy = false
          this.cookie = false
          this.security = false
          this.information = false
        }
        if (e === 'security') {
          this.security = true
          this.privacy = false
          this.terms = false
          this.cookie = false
          this.information = false
        }
        if (e === 'information') {
          this.information = true
          this.privacy = false
          this.terms = false
          this.cookie = false
          this.security = false
        }
      },
      hideModal() {
        this.footerModal = false
      }
    }
  }
</script>
