<template>
  <!-- <div class="bg-purple-200 py-6"> -->

  <div class="page">
    <h2 class="text-4xl font-bold text-center text-gray-800 mb-6">Projects</h2>

    <h3 class="text-2xl font-semibold text-gray-700 mb-4">
      Jupyter Notebooks & .py Projects
    </h3>
    <ProjectCard
      v-for="(project, index) in notebooks"
      :key="'nb-' + index"
      :title="project.title"
      :description="project.description"
      :link="project.link"
      :isIframe="project.isIframe"
    />
    <hr class="my-8 border-blue-600" />
    <h3 class="text-2xl font-semibold text-gray-700 mt-10 mb-4">
      Master’s Course Reports (PDFs)
    </h3>
    <ProjectCard
      v-for="(project, index) in mastersReports"
      :key="'ms-' + index"
      :title="project.title"
      :description="project.description"
      :link="project.link"
      :download="project.download"
    />
  </div>
</template>

<script setup>
import ProjectCard from "@/components/ProjectCard.vue";

const notebooks = [
  {
    title: "API & EDA : NYC 311 Complaints",
    description:
      "Data pipeline project for fetching, cleaning, and analyzing NYC 311 service requests.",
    link: "https://github.com/simon-hochmuth/portfolio/tree/master/src/scripts/NYC_311_API_Project/notebooks/311_eda.ipynb",
  },
  {
    title: "StreamLit : NYC 311 Complaints",
    description:
      "Pulled the data from the API Pipeline and made a Streamlit web application to explore certain features.",
    link: "https://311nyc.streamlit.app/",
  },
  {
    title: "Ship Prediction in Satellite Images",
    description:
      "Using Deep Learning Neural Networks to detect ships in satellite imagery.",
    link: "https://github.com/simon-hochmuth/portfolio/blob/master/Notebooks/Deep_Learning_Ship_Dataset.ipynb",
  },
  {
    title: "Classification of Credit Accounts",
    description: "Developing marketing strategies using unsupervised ML.",
    link: "https://github.com/simon-hochmuth/portfolio/blob/master/Notebooks/Credit_card_dataset.ipynb",
  },
  // {
  //   title: "Predicting Wine Rankings",
  //   description: "Supervised ML model to predict wine quality scores.",
  //   link: "https://github.com/simon-hochmuth/portfolio/blob/master/Notebooks/Supervised_Learning_Wine.ipynb",
  // },
  {
    title: "SQL Dataset Manipulation",
    description: "Using SQL in Python for data transformation and querying.",
    link: "https://github.com/simon-hochmuth/portfolio/blob/master/Notebooks/SQL_in_Python.ipynb",
  },
  // REMOVE TO MAKE IT LESS LONG
  // {
  //   title: "Global Military Expenditure",
  //   description: "Exploratory analysis of worldwide military spending data.",
  //   link: "https://github.com/simon-hochmuth/portfolio/blob/master/Notebooks/Capstone_1_Military_Expenditure%20(2).ipynb",
  // },
];

const mastersReports = [
  {
    title: "KMeans Clustering on Soil Data",
    description: "Clustering satellite data using k-means.",
    link: "/reports/K-means_Clustering.pdf",
    download: true,
  },
  {
    title: "Deep Learning: Fashion MNIST",
    description: "Image classification using deep neural networks.",
    link: "/reports/Deep_Learning_MNIST_FASHION.pdf",
    download: true,
  },
  {
    title: "SVM Models",
    description: "SVM-based classification for device failure prediction.",
    link: "/reports/SVM_Models.pdf",
    download: true,
  },
  {
    title: "For Other Reports",
    description: "",
    link: "https://github.com/simon-hochmuth/portfolio/blob/master/Master_Course_Project_Reports",
  },
];
</script>

<style scoped>
.page {
  padding: 2rem;
  max-width: 800px;
  margin: auto;
}
</style>
