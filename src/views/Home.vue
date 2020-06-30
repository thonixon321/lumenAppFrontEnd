<template>
  <div
    @click="$emit('clicked')"
    class="container"
  >
    <base-card
      v-for="(card, index) in mockData"
      :key="index"
      :author="card.author"
      :title="card.blogTitle"
      :body="card.body"
      :published="card.publishDate"
      :blogImage="card.blogImage"
      :authorImage="card.authorImage"
      :showEdit="loggedIn"
      :showDelete="loggedIn"
    >
    </base-card>
  </div>
</template>

<script>
import BaseCard from "@/components/BaseCard";
import { mapState } from "vuex";

export default {
  name: "LoginPage",

  data() {
    return {
      feedback: null,
      mockData: [
        {
          author: "Henry David Thoureau",
          blogTitle: "Living Outdoors",
          body:
            "I went to the woods because I wished to live deliberately, to front only the essential facts of life, and see if I could not learn what it had to teach, and not, when I came to die, discover that I had not lived. Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.",
          publishDate: "May 7",
          blogImage:
            "http://localhost:8080/rest_movieApp/api/image/book_nature.jpg",
          authorImage:
            "http://localhost:8080/rest_movieApp/api/image/Henry_David_Thoreau.jpg"
        },
        {},
        {
          author: "William Shakesman",
          blogTitle: "The World",
          body:
            "All the world's a stage, and all the men and women merely players: they have their exits and their entrances; and one man in his time plays many parts, his acts being seven ages. Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead. Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.",
          publishDate: "May 7",
          blogImage: "http://localhost:8080/rest_movieApp/api/image/stage.jpg",
          authorImage:
            "http://localhost:8080/rest_movieApp/api/image/william-shakespeare.jpg"
        }
      ]
    };
  },

  computed: {
    ...mapState({
      loggedIn: state => state.loggedIn
    })
  },

  methods: {
    formSubmitted() {}
  },

  components: {
    BaseCard
  }
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS */

/* .container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
} */

.container {
  display: flex;
  flex-wrap: wrap;
}

.error {
  border: 1px solid rgb(240, 59, 95);
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
