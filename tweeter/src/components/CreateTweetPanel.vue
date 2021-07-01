<template>
  <form class="create-tweet-panel" @submit.prevent="createNewTweet" :class="{ '--exceeded': newTweetCharacterCount > 180 }">
      <label for="newTweet"><strong>New Tweet</strong> ({{ newTweetCharacterCount}}/180)</label>
      <textarea id="newTweet" rows="4" v-model="state.newTweetContent" placeholder="Enter Tweet Here..."/>

      <div class="create-tweet-panel__submit">
          <button>Tweet!</button>
      </div>

  </form>
</template>

<script>
import { reactive, computed } from "vue";
export default {
    name: "CreateTweetPanel",

    setup(props, ctx) {
        const state = reactive({
            newTweetContent: ''
        })

        const newTweetCharacterCount = computed(() => state.newTweetContent.length)

        function createNewTweet() {
            if (state.newTweetContent) {
                ctx.emit('add-tweet', state.newTweetContent);
                state.newTweetContent = '';
            }
        }

        return {
          state,  
          newTweetCharacterCount,
          createNewTweet
        }
    }
}
</script>

<style lang="scss" scoped>
.create-tweet-panel {
    margin-top: 20px;
    padding: 20px 0;
    display: flex;
    flex-direction: column;

    textarea {
        border: 1px solid #DFE3E8;
        border-radius: 5px;
    }

    .create-tweet-panel__submit {
        display: flex;
        justify-content: space-between;

        button {
            padding: 5px 20px;
            margin: auto 0;
            border-radius: 5px;
            border: none;
            background-color: deeppink;
            color: white;
            font-weight: bold;

            &:hover {
                cursor: pointer;
                background-color: coral;
            }
        }
    }

    &.--exceeded {
        color: red;
        border-color: red;

        .create-tweet-panel__submit {
            button {
                background-color: red;
                color: white;
            }
        }
    }
}

</style>