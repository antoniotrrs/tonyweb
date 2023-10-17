<template>
  <div class="home">

    <v-container fluid class="grey lighten-5" >
    <v-container class="fill-height">
      <v-row>
        <v-col cols="12" md="4" class="d-flex justify-center align-center flex-column" >

        <v-card class="d-flex justify-center align-center flex-column white rounded-lg" elevation=0 width="290" height="500 ">
          <v-card width="100" height="" class="rounded-circle text-center mr-auto ml-auto ">
            <v-img
            class="profile"
            max-height="100"
            width="100"
            lazy-src="/img/tony_torres.jpg"
            src="/img/tony_torres.jpg"
            ></v-img>
          </v-card>


          <h4 class="font-weight-light mt-5">luisantonio.t@icloud.com</h4>
          <h4 class="font-weight-light">Dublin, Ireland</h4>
          <h4 class="font-weight-light">Founder of <a href="https://www.bats.com.mx" target="_blank" class="secondary--text">BATS</a></h4>


          <p>
          <v-btn class="ma-2" color="primary" fab x-small outliner href="https://github.com/antoniotrrs" target="_blank"><v-icon >$vuetify.icons.github</v-icon></v-btn>
          <!--<v-btn class="ma-2" color="primary" fab x-small outliner href="/" target="_blank"><v-icon >$vuetify.icons.insta</v-icon></v-btn>-->
          <v-btn class="ma-2" color="primary" fab x-small outliner href="https://www.linkedin.com/in/antoniotrrs" target="_blank"><v-icon >$vuetify.icons.linkd</v-icon></v-btn>
          <!--<v-btn class="ma-2" color="primary" fab x-small outliner href="/" target="_blank"><v-icon >$vuetify.icons.apple</v-icon></v-btn>-->
          </p>
        </v-card>
        </v-col>

        <v-col cols="12" md="8" class="d-flex justify-center align-center flex-column">
        <v-card width="" flat color="grey lighten-5">
          <h1 class="font-weight-regular primary--text text-h3 text-md-h2">Antonio Torres</h1>
          <h2 class="font-weight-light text-h4">MSc in AI for Business | iOS Developer</h2>

          <p class="mt-5 font-weight-regular text-black">
            Hello World ! <br>
            This is Tony. I'm a software engineer currently doing my master degree in AI for Busines, I've been working on projects from different fields such as medicine, retail and logistic using different technologies depending on the needs of the user. Having strong knowledge in mobile development coding in Swift for iOS and Web development to create web systems using PHP, Laravel, SQL.
          </p>
          <v-btn
          class="ma-2"
          outlined
          color="indigo"
          href="/doc/webcv_en.pdf"
          target="_blank"
          >
      Download CV
    </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    </v-container>


    <v-container style="padding-top: 5rem; padding-bottom: 5rem;">

      <v-row class="pb-5">
        <v-col cols="12">
          <h2 class="font-weight-light text-center text-h5 text-blues">Portfolio</h2>
          <h2 class="font-weight-light text-center text-h4">What I've done as BATS</h2>
          <h2 class="font-weight-light text-center text-h5">BATS is my startup that I created in order to attend SMB requirements and provide them digital solutions.</h2>
        </v-col>
      </v-row>

      <v-sheet class="mx-auto" >
        <v-slide-group v-model="model" active-class="success" >
          <v-slide-item
            v-for="(value, i) in batsproj" :key="i" >

                <div v-if="i < '4'">
                  <v-card class="pa-5 ma-5" width="330" min-height="280">
                    <p class="text-black text-subtitle-1">{{value.title}} <v-icon small>$vuetify.icons.{{value.device}}</v-icon></p>
                    <v-divider class="mb-5"></v-divider>
                    <p class="body-1 text-black">{{value.description}}</p>
                    <p class="text-subtitle-2 grey--text">{{value.tools}}</p>
                  </v-card>
                  </div>
                <div v-else>
                  <a href="https://www.bats.com.mx" target="_blank" class="text-decoration-none"><v-card class="pa-5 ma-5 d-flex align-center" width="330" min-height="280">
                    <p class="body-1 text-black text-center">{{value.description}}</p>
                  </v-card></a>
                </div>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </v-container>

    <v-container style="padding-bottom: 5rem;">
      <v-row>
        <v-col cols="12">
          <h2 class="font-weight-light text-center text-h5 text-blues">Portfolio</h2>
          <h2 class="font-weight-light text-center text-h4">Project Owner (Web)</h2>
          <h2 class="font-weight-light text-center text-h5">Technologies that I launched in order to offer solutions for pandemic status.</h2>
        </v-col>
      </v-row>

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
          <p class="font-weight-regular text-h5"><a href="https://paraordenar.bats.com.mx/" target="_blank">Paraordenar</a></p>
          <p class="font-weight-light body--text">Digital menu where you can receive food orders from your customers throught whatsapp. Customers can access to this menu with an url or QR code</p>
          <p class="font-weight-light body--text"> e.g. <a href="https://tunos.bats.com.mx/" target="_blank" >https://www.lostunos.paraordenar.com</a></p>
          <p class="text-subtitle-2 blue--text">Technologies: Laravel, MYSQL</p>
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
          <p class="font-weight-regular text-h5"><a href="https://deinvitado.bats.com.mx/" target="_blank">Deinvitado</a></p>
          <p class="font-weight-light body--text">Online letter for social meetings which shows all information about your event such as: place, schedule event, address, time and interested links about event.</p>
          <p class="font-weight-light body--text"> e.g. <a href="https://andreaydaniel.bats.com.mx/" target="_blank" >https://andreaydaniel.bats.com.mx/</a></p>
          <p class="text-subtitle-2 blue--text">Technologies: Vue.js, Vuetify</p>
        </v-col>
      </v-row>


    </v-container>

<v-container>
    <v-row >
    <v-col cols="12">
      <v-divider></v-divider>
      <p class="text-h4 text-center marginVer text-blues"> "Easy technology makes easier life" </p>
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

    batsproj: [
    {
      title: 'COMEFAENL app and admin',
      device: 'iphone',
      description: 'iOS App for a Medical Institute based at Monterrey, NL. This app works as dashboard of events, meets and reminders for a private group of doctors.',
      frames: 'Push-notifications, web-services, CoreLocation, CoreAnimation',
      photo: '',
      tools: 'Obj-C, Android, MYSQL, firebase',
      link: '',
    },
    {
    title: 'Prepa 1 (UANL)',
    device: 'iphone',
    description: 'Android app for students that shows events, schedule and interested information about college',
    frames: '',
    photo: '',
    tools: 'Android, firebase',
    link: '',
    },
    {
    title: 'OSCORP',
    device: 'ipad',
    description: 'Online dashboard to management app info and sign up new users with e-mail invitations',
    frames: 'Push-notifications, web-services, CoreLocation, CoreAnimation',
    photo: '',
    tools: 'Laravel, MYSQL',
    link: '',
    },
    {
    title: 'DECOVAEVENT',
    device: 'shop',
    description: 'Online dashboard to management app info and sign up new users with e-mail invitations',
    frames: 'Push-notifications, web-services, CoreLocation, CoreAnimation',
    photo: '',
    tools: 'Laravel, MYSQL',
    link: '',
    },
    {
    title: '',
    device: '',
    description: 'Click here to visit BATS and see more projects.',
    frames: '',
    photo: '',
    tools: '',
    link: '',
    },

    ]

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
