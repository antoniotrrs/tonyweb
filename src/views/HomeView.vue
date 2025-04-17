<template>
  <div class="home">

    <v-container fluid class="grey lighten-5" >
    <v-container class="fill-height">
      <v-row>
        <v-col cols="12" md="4" class="d-flex justify-center align-center flex-column" >

        <v-card class="d-flex justify-center align-center flex-column white rounded-lg" elevation=0 width="290" height="500 ">
          <v-img
          src="/img/tony_torres.jpg">
          </v-img>

        </v-card>
        </v-col>

        <v-col cols="12" md="8" class="d-flex justify-center align-center flex-column">
        <v-card width="" flat color="grey lighten-5">
          <h1 class="font-weight-regular primary--text text-h3 text-md-h3">Luis Antonio Reyna Torres</h1>
          <h2 class="font-weight-light text-h5">MSc in AI for Business | Software Engineer</h2>

          <p class="mt-5 font-weight-regular text-black">
            Hello World ! <br>
            This is Tony. I'm a Software Engineer pursuing a master degree in AI for Business, I've worked on a variety of technology challenges from fields such as medicine, retail and logistic. Having strong knowledge in mobile and web development using Swift, Python, PHP, Javascript, HTML5 to achieve the goals required from companies. Focused on Data Analytics and AI-driven models aim to provide Intelligent Portable Software. LET'S WORK TOGETHER!😉

          </p>
          <v-btn
          class="ma-2"
          color="primary"
          href="mailto:luisato.trrs@gmail.com"
          target="_blank">
            contact me
          </v-btn>
          <v-btn
          class="ma-2"
          color="primary"
          outlined
          href="/doc/webcv_en.pdf"
          target="_blank">
            Download CV
          </v-btn>

          </v-card>
        </v-col>
      </v-row>
    </v-container>
    </v-container>



    <v-container style="padding-top: 3rem; padding-bottom: 5rem;">

    <h2 class="font-weight-light text-h4 primary--text">About Me</h2><br>
    <v-row class="align-content-center">

      <p class="ml-4">📍 Based in Dublin, Ireland.</p>
      <p class="ml-4">🏠 From Monterrey, México. </p>
      <p class="ml-4">✉️ luisato.trrs@gmail.com</p>
      <p class="ml-4"><v-btn color="primary" fab x-small outliner href="https://github.com/antoniotrrs" target="_blank"><v-icon >$vuetify.icons.github</v-icon></v-btn>
          <v-btn class="ml-4" color="primary" fab x-small outliner href="https://www.linkedin.com/in/antoniotrrs" target="_blank"><v-icon >$vuetify.icons.linkd</v-icon></v-btn></p>
    </v-row>

    <v-row>
    <v-col>
    <v-divider></v-divider>
      <p class="text-h6 mt-5 primary--text">Education</p>
      <p class="mt-5 mb-0 font-weight-bold">BS in Software Technology Engineer</p>
      <p >Holding a Bachelor's degree from Universidad Autónoma de Nuevo León at México from 2010 to 2015.</p>

      <p class="mt-4 mb-0 font-weight-bold">MSc in AI for Business</p>
      <p>Current student at the National College of Ireland at Ireland. Focused on theory and implementation of AI in business based on data analysis and machine learning algorithms.</p>

    </v-col>
    </v-row>

    <v-row class="mb-5">
    <v-col class="mb-5">
    <v-divider></v-divider>
      <p class="text-h6 mt-5 primary--text">Work Experience</p>
      <p class="mt-3 mb-0 font-weight-bold">Senior iOS Developer <label class="font-weight-regular">at Banregio from April 2022 to August 2022 </label></p>
      <p class="mt-3 mb-0 font-weight-bold">Senior iOS Developer <label class="font-weight-regular">at Todito Pagos S.A. de C.V. from January 2018 to April 2022 </label></p>
      <p class="mt-3 mb-0 font-weight-bold">Lead Project Manager <label class="font-weight-regular">at Preparatoria 1 (UANL) from April 2017 to September 2017 </label></p>
      <p class="mt-3 mb-0 font-weight-bold">Senior Front-End Developer <label class="font-weight-regular">at Trading Pal from April 2017 to January 2018 </label></p>
      <p class="mt-3 mb-0 font-weight-bold">Front-End Developer <label class="font-weight-regular">at the Blue People from September 2016 to March 2017 </label></p>
      <p class="mt-3 mb-0 font-weight-bold">Front-End Developer <label class="font-weight-regular">at Lotus Web Studio from June 2015 to September 2016 </label></p>


    </v-col>
    </v-row>



    <h2 class="font-weight-light text-h4 mt-5 primary--text">Portfolio</h2><br>
    <v-row justify="center">
      <v-expansion-panels accordion>
        <v-expansion-panel
          v-for="(item,i) in acordeon"
          :key="i">
            <v-expansion-panel-header>
              <p> <label class="font-weight-bold text-h6">{{item.title}}</label> <label class="font-weight-light text-h6">{{item.sub}}</label></p>

            </v-expansion-panel-header>
            <v-expansion-panel-content>
            <div v-if="i < '2'">

                <h2 class="font-weight-light text-md-left text-center text-h6">{{item.desc}}</h2><br>



                    <v-slide-item
                      v-for="(value, j) in nameProj[i]" :key="j" >

                          <v-col cols="12" md=6 class="d-inline-block">
                            <v-card class="pa-5">
                              <p class="text-black text-subtitle-1">{{value.title}} <v-icon small>$vuetify.icons.{{value.device}}</v-icon></p>
                              <v-divider class="mb-5"></v-divider>
                              <p class="body-1 text-black">{{value.description}}</p>

                                <ul>
                                  <li v-for="(dot,k) in value.dots" :key="k">{{dot}}</li>
                                </ul>

                              <p class="text-subtitle-2 grey--text">{{value.tools}}</p>
                            </v-card>
                          </v-col>

                    </v-slide-item>




            </div>
            <div v-else>

                <v-row class="mt-15">
                  <v-col cols="12" md="4" class="justify-center d-flex">

                  <v-img
                  lazy-src="/img/iphone.png"
                  src="/img/iphone.png"
                  max-width="300"
                  class="iphoneCase align-center"

                  >

                    <v-img
                    class="mr-auto ml-auto"
                    lazy-src="/img/tunos.gif"
                    src="/img/tunos.gif"
                    max-width="131"
                    ></v-img></v-img>

                  </v-col>
                  <v-col cols="12" md="8">
                    <p class="font-weight-regular text-h6"><a href="https://tunos.bats.com.mx/" target="_blank">Paraordenar</a></p>
                    <p class="font-weight-light body--text">Digital menu where you can receive food orders from your customers throught whatsapp. Customers can access to this menu with an url or QR code</p>
                    <ul>
                      <li>HTML5 and Javascript as core languages programming</li>
                      <li>RESTful APIs created with Laravel framework</li>
                      <li>MYSQL database implemented.</li>
                    </ul>
                  </v-col>
                </v-row>

                <v-row >
                  <v-col cols="12" md="4" class="justify-center d-flex">

                  <v-img
                  lazy-src="/img/iphone.png"
                  src="/img/iphone.png"
                  max-width="300"
                  class="iphoneCase align-center">

                    <v-img
                    class="mr-auto ml-auto"
                    lazy-src="/img/invitacin.gif"
                    max-width="131"
                    src="/img/invitacin.gif"
                    ></v-img></v-img>

                  </v-col>
                  <v-col cols="12" md="8">
                    <p class="font-weight-regular text-h6"><a href="https://andreaydaniel.bats.com.mx/" target="_blank">Deinvitado</a></p>
                    <p class="font-weight-light body--text">Online letter for social meetings which shows all information about your event such as: place, schedule event, address, time and interested links about event.</p>
                    <ul>
                      <li>Vue.js and Vuetify as core languages programming</li>
                      <li>RESTful APIs created with Laravel framework</li>
                      <li>MYSQL database implemented.</li>
                    </ul>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col>
                    <p class="font-weight-regular text-h6">Web Pages and E-commerce</p>
                    <p class="font-weight-light"><a href="https://bats.com.mx/" target="_blank">BATS</a></p>
                    <p class="font-weight-light"><a href="https://https://www.decovaevent.com/" target="_blank">Decova</a></p>
                    <p class="font-weight-light"><a href="https://www.taiaho.com/" target="_blank">Taiaho</a></p>
                    <p class="font-weight-light"><a href="https://wellswick.com/" target="_blank">Wellswick</a></p>
                    <p class="font-weight-light"><a href="https://nonplus.bats.com.mx/" target="_blank">Nonplus Cerveza</a></p>
                  </v-col>
                </v-row>

            </div>
            </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>







    </v-container>

<v-container>
    <v-row >
    <v-col cols="12">
      <v-divider></v-divider>
      <p class="text-h5 text-center marginVer text-blues"> "Easy technology makes easier life" </p>
      <v-divider></v-divider>

    </v-col>

  </v-row>
</v-container>
<v-container>
    <v-row >
    <v-col cols="12" class="text-center">
      <p>Antonio Torres © {{currentYear()}} | Powered by Vue.js</p>

    </v-col>

  </v-row>
</v-container>


    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  data: () => ({
    nameProj:[
    [
    {
    title: 'Chatbot using Deep Learning',
    device: 'iphone',
    description: 'Chatbot using Neural Networks and ML Algorithms such as NLP, Bag of Words and Tokenization',
    frames: '',
    photo: '',
    dots:['Chatbot developed using Python as core language programming','TensorFlow, NLTK and Sklearn libraries from Python','Bag of Words algorithm implementing Stemming and Tokenization','Accuracy, Loss, Recall and F1 used to measure model','Dataset of 100 categories implemented on model which was split in 80% for training and 20% for testing'],
    tools: '',
    link: '',
    }
    ],[
    {
      title: 'COMEFAENL',
      device: 'iphone',
      description: 'iOS App for a Medical Institute based in Monterrey, Mx. This app works as dashboard of events, meets and reminders for a private group of doctors.',
      frames: 'Push-notifications, web-services, CoreLocation, CoreAnimation',
      photo: '',
      dots:['Swift used as core language programming','MYSQL database implemented','Firebase implemented for push notifications','RESTful APIs created with Laravel framework','Xcode used to code application','Testflight used to test the app within a selected group of testers', 'Uploaded to Apple Business Manager for a private distribution.'],
      tools: 'Obj-C, Android, MYSQL, firebase',
      link: '',
    },
    {
    title: 'Prepa 1 (UANL)',
    device: 'iphone',
    description: 'Android app for students that shows events, schedule and interested information about college',
    frames: '',
    photo: '',
    dots:['Java/Android used as core language programming','Firebase database implemented','Firebase implemented for push notifications','RESTful APIs created with Firebase','Android Studio used to code application', 'Uploaded to Play Store for distribution.'],
    tools: 'Android, firebase',
    link: '',
    },
    {
    title: 'OSCORP',
    device: 'ipad',
    description: 'Online dashboard to management app info and sign up new users with e-mail invitations',
    frames: 'Push-notifications, web-services, CoreLocation, CoreAnimation',
    photo: '',
    dots:['Swift used as core language programming','PHP script implemented to upload documents','Human-Centered interaction with apple pen','Xcode used to code application', 'Uploaded to Apple Business Manager for a private distribution.'],
    tools: 'Laravel, MYSQL',
    link: '',
    }
    ]],
    acordeon: [
    {title:'AI',
    sub:'College Projects',
    desc: 'Data Analysis and Machine Learning Models'},
    {title:'App',
    sub:'iOS Developer',
    desc:'Development, Testing and Releasing on Appstore were Addressed for These Challenges'},
    {title:'Web',
    sub:'Software Developer',
    desc:'Solutions for SMB to Enhance Processes and Reduce Costs'},
    ],

  }),
  methods: {
    currentYear() {
      const current = new Date();
      return current.getFullYear();

    }
  }
}

</script>
<style>

.profile .v-image__image {
background-size: 140px;
background-position: -25px -50px !important;
}
.iphoneCase .v-image__image {
z-index:1;
}

.text-black {
  color: #37474F;
}

.text-blues {
  color: #90A4AE;
}

.marginVer {
  margin-top: 3rem !important;
  margin-bottom: 3rem !important;
}


.contflow {
     white-space: nowrap;
     overflow-x: scroll;
}

</style>
