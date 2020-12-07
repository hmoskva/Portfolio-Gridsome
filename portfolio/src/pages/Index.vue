<template>
  <Layout>
    <div class="hero flex h-screen items-center">
      <!-- <div class="anto">
        HABIB SOGBESAN
      </div> -->
      <TextSection
        wrapperClass="section-container px-8 md:px-16"
        title="Nice to meet you, I am"
        mainTitle="HABIB SOGBESAN"
        info=""
        :btnProps="{ text: 'Explore Me', outline: true, icon: ArrowDown }"
      >
        <div class="socials my-8" slot="socials">
          <AppLabel text="Software Developer" />
          <div class="flex mt-6">
            <Icon :icon="GithubIcon" class="mr-2" />
            <Icon :icon="LinkedIn" />
          </div>
        </div>
      </TextSection>
    </div>
  </Layout>
</template>

<script>
import TextSection from "../components/TextSection";
import AppLabel from "~/components/AppLabel";
import Icon from "~/components/icons/Icon";
import GithubIcon from "~/components/icons/Github";
import LinkedIn from "~/components/icons/LinkedIn";
import ArrowDown from "~/components/icons/ArrowDown";

export default {
  metaInfo: {
    title: "Hello, world!",
  },
  data() {
    return {
      GithubIcon,
      LinkedIn,
      ArrowDown,
    };
  },
  components: {
    TextSection,
    AppLabel,
    Icon,
  },
};
</script>

<style>
.anto {
  font-size: 144px;
  font-family: "Anton", sans-serif;
  line-height: 1;
}
.section-container {
  /* padding: 0 100px; */
}
.hero {
  background-image: url("../assets/images/tree.png");
  background-position: top right;
  background-repeat: no-repeat;
}
</style>
