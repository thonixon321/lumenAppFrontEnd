<template>
  <div class="card sm:w-full lg:w-1/2">
    <div
      @click="sendAlert"
      class="inner-content w-full lg:max-w-full lg:flex transition duration-500 ease-in-out"
    >
      <div
        class="object-cover h-64 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        :style="`background-image: url(${blogImage})`"
      ></div>
      <div
        class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
      >
        <div class="mb-8 h-64 overflow-hidden">
          <p
            v-if="showEdit === false && showDelete === false"
            class="text-sm text-gray-600 flex items-center"
          >
            <svg
              class="fill-current text-gray-500 w-3 h-3 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"
              />
            </svg>
            Members only
          </p>
          <div class="flex justify-end" v-if="showEdit || showDelete">
            <base-button @clicked="changePage" v-if="showEdit" :icon="true" type="editIcon"></base-button>
            <base-button v-if="showDelete" :icon="true" type="trashIcon"></base-button>
          </div>
          <div class="text-gray-900 font-bold text-xl mb-2">{{ title }}</div>
          <p class="text-gray-700 text-base">{{ body }}</p>
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <img class="w-10 h-10 rounded-full mr-4" :src="authorImage" />
            <div class="text-sm">
              <p class="text-gray-900 leading-none italic">{{ author }}</p>
              <p class="text-gray-600">{{ published }}</p>
            </div>
          </div>
          <base-button @clicked="changePage" :icon="false" type="viewIcon">
            <a href="#" class="underline" slot="right-text">Read more</a>
          </base-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "./BaseButton";
import { mapState } from "vuex";

export default {
  name: "BaseCard",

  props: {
    showEdit: {
      type: Boolean,
      default: false
    },

    showDelete: {
      type: Boolean,
      default: false
    },

    author: {
      type: String,
      default: "Tommy Nixon"
    },

    title: {
      type: String,
      default: "How to Code"
    },

    body: {
      type: String,
      default:
        "You get your computer, and make sure there is a keyboard. Making sure the computer is charged or connected to a power outlet, turn your computer on. Put your hands on the keyboard, and then.... Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead. Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead."
    },

    published: {
      type: String,
      default: "May 7"
    },

    blogImage: {
      type: String,
      default:
        "https://cdn2.hubspot.net/hub/145335/hubfs/blog-image-uploads/9_Blog_Layout_Best_Practices_From_2017.jpg?length=980&name=9_Blog_Layout_Best_Practices_From_2017.jpg"
    },

    authorImage: {
      type: String,
      default:
        "https://cdn.vox-cdn.com/thumbor/ohMs4otWOL2S6YHOkdDO4yCnsVo=/0x0:3968x5952/1200x800/filters:focal(1830x1902:2464x2536)/cdn.vox-cdn.com/uploads/chorus_image/image/56974325/VanderMeer.Jeff.author.photo.by.Kyle.Cassidy.2016.0.0.0.jpg"
    }
  },

  computed: {
    ...mapState({
      loggedIn: state => state.loggedIn
    })
  },

  methods: {
    changePage(type) {
      console.log(type);

      if (this.showEdit || this.showDelete) {
        if (type === "viewIcon") {
          this.$router.push({
            name: "Blog",
            params: {
              blog: {
                readonly: true,
                title: this.title,
                author: this.author,
                body: this.body,
                published: this.published,
                blogImage: this.blogImage,
                authorImage: this.authorImage
              }
            }
          });
        } else if (type === "editIcon") {
          this.$router.push({
            name: "Blog",
            params: {
              blog: {
                readonly: false,
                title: this.title,
                author: this.author,
                body: this.body,
                published: this.published,
                blogImage: this.blogImage,
                authorImage: this.authorImage
              }
            }
          });
        }
      } else {
        this.sendAlert();
      }
    },

    sendAlert() {
      console.log("card clicked");
      if (this.loggedIn === false) {
        this.$store.dispatch("updateAlert", {
          alert: true,
          alertSuccess: false,
          alertTitle: "Unauthenticated!",
          alertMessage: "Please log in to view content."
        });

        setTimeout(() => {
          this.$store.dispatch("updateAlert", {
            alert: false,
            alertSuccess: false,
            alertTitle: "",
            alertMessage: ""
          });
        }, 1500);
      } else {
        return;
      }
    }
  },

  components: {
    BaseButton
  }
};
</script>

<style scoped>
.card {
  padding: 2em;
}

.inner-content:hover {
  transform: scale(1.05);
}
</style>
