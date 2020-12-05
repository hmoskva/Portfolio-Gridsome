<template>
  <Layout>
    <div class="hero flex h-screen items-center">
      <TextSection
        wrapperClass="section-container"
        title="Nice to meet you, I am"
        mainTitle="HABIB SOGBESAN"
        info="Since beginning my journey as a software engineer nearly 4 years ago,
          I've done both physical and remote work for agencies, and collaborated
          with talented people to create seamless software products for both
          business and consumer use. I'm naturally curious, passionale about
          problem solving and perpetually working on improving my skills one
          line of code at a time."
        :btnProps="{ text: 'Explore Me', outline: true, icon: ArrowDown }"
      >
        <div class="socials my-8" slot="socials">
          <AppLabel text="Software Developer" />
          <div class="flex mt-6">
            <Icon :icon="GithubIcon" class="mr-1" />
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
.home-links a {
  margin-right: 1rem;
}
.section-container {
  padding: 0 100px;
}
.hero {
  background-image: url("../assets/images/tree.png");
  background-position: top right;
  background-repeat: no-repeat;
  position: relative;
  top: -35px;
  /* background-size: contain; */
}
@media (max-width: 480px) {
  .hero {
    top: 0;
  }
}
</style>
