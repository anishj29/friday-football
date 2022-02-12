<template>
  <div>
    <v-footer color="primary" dark app absolute>
      <v-container>
        <v-row align="start">
          <v-col cols="12" md="3">
            <h4 class="text-h5 font-weight-bold">
              Friday Football Talks
            </h4>
          </v-col>

          <v-col cols="12" md="3">
            <v-list flat color="transparent">
              <v-subheader class="text-h6">Social Media</v-subheader>
              <v-list-item-group color="primary">
                <v-list-item
                  v-for="(item, i) in heroui"
                  :key="i"
                  :href="item.href"
                  dense
                  target="_black"
                >
                  <v-list-item-content>
                    <v-list-item-title
                      class="text-body-1"
                      v-text="item.text"
                    ></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>

          <v-col cols="12" md="3">
            <v-list flat color="transparent">
              <v-subheader class="text-h6">Giraffe</v-subheader>
              <v-list-item-group color="primary">
                <v-list-item
                  v-for="(item, i) in shock"
                  :key="i"
                  :href="item.href"
                  dense
                  target="_black"
                >
                  <v-list-item-content>
                    <v-list-item-title
                      class="text-body-1"
                      v-text="item.text"
                    ></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>

          <v-col cols="12" md="3">
            <div>
              <h5 class="text-h6 font-weight-bold">
                Subscribe
              </h5>
              <p class="text-body-1">
                The latest Rocket news, articles, and resources, sent straight
                to your inbox every month.
              </p>
            </div>

            <v-row>
              <v-col cols="8">
                <v-text-field
                  label="Filled"
                  solo
                  light
                  hide-details
                ></v-text-field>
              </v-col>

              <v-col cols="4">
                <v-btn large block color="secondary">
                  Subscribe
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <div class="text-center mt-6">
          Copyright &copy;
          <a
            class="white--text"
            target="_blank"
            rel="noopener noreferrer"
            >FridayFootballTalks</a
          >
          {{ new Date().getFullYear() }}. All rights reserved.
        </div>
      </v-container>
    </v-footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    heroui: [
      {
        text: "Instagram",
        href: "https://github.com/AGDholo",
      },
      {
        text: "Twitter",
        href: "https://heroui.net/",
      },
    ],
    shock: [
      {
        text: "Download",
        href: "https://github.com/AGDholo/giraffe",
      },
      {
        text: "Issues",
        href: "https://github.com/AGDholo/giraffe/issues",
      },
      {
        text: "LICENSE",
        href: "https://github.com/AGDholo/giraffe/blob/master/LICENSE",
      },
    ],
  }),
};
</script>
