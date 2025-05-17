<template>
  <div class="page">
    <h2 class="text-4xl font-bold text-center text-gray-800 mb-6">Projects</h2>

    <ProjectCard
      v-for="(project, index) in projects"
      :key="index"
      :title="project.title"
      :description="project.description"
      :link="project.link"
    />
  </div>
</template>

<script setup>
import ProjectCard from "@/components/ProjectCard.vue";

const projects = [
  {
    title: "Ship Prediction in Satellite Images",
    description:
      "Using Deep Learning Neural Networks to detect ships in satellite imagery.",
    link: "https://github.com/simon-hochmuth/portfolio/blob/master/Deep_Learning_Ship_Dataset.ipynb",
  },
  {
    title: "Grouping of Credit Accounts",
    description: "Developing marketing strategies using unsupervised ML.",
    link: "https://github.com/simon-hochmuth/portfolio/blob/master/Credit_card_dataset.ipynb",
  },
  {
    title: "Predicting Wine Rankings",
    description: "Supervised ML model to predict wine quality scores.",
    link: "https://github.com/simon-hochmuth/portfolio/blob/master/Supervised_Learning_Wine.ipynb",
  },
  {
    title: "SQL Dataset Manipulation",
    description: "Using SQL in Python for data transformation and querying.",
    link: "https://github.com/simon-hochmuth/portfolio/blob/master/SQL_in_Python.ipynb",
  },
  {
    title: "Global Military Expenditure",
    description: "Exploratory analysis of worldwide military spending data.",
    link: "https://github.com/simon-hochmuth/portfolio/blob/master/Capstone_1_Military_Expenditure%20(2).ipynb",
  },
  {
    title: "Reinforcement Learning",
    description: "Finding shortest paths using RL techniques.",
    link: "https://github.com/simon-hochmuth/portfolio/blob/master/Projects_From_Masters_Courses/Reinforcement_Learning.pdf",
  },
  {
    title: "Deep Learning: Fashion MNIST",
    description: "Image classification using deep neural networks.",
    link: "https://github.com/simon-hochmuth/portfolio/blob/master/Projects_From_Masters_Courses/Deep_Learning_MNIST_FASHION.pdf",
  },
  {
    title: "Regression & Data Mining",
    description: "Predictive maintenance via regression models.",
    link: "https://github.com/simon-hochmuth/portfolio/blob/master/Projects_From_Masters_Courses/Log_Regression_and_Data_Mining.pdf",
  },
  {
    title: "SVM Models",
    description: "SVM-based classification for device failure prediction.",
    link: "https://github.com/simon-hochmuth/portfolio/blob/master/Projects_From_Masters_Courses/SVM_Models.pdf",
  },
  {
    title: "Decision Tree Models with Cognos",
    description: "Using Cognos to analyze billionaire data trends.",
    link: "https://github.com/simon-hochmuth/portfolio/blob/master/Projects_From_Masters_Courses/Decision_Tree_Models_with_Cognos.pdf",
  },
  {
    title: "Neural Networks on Diabetes Data",
    description: "Exploring health data using basic NNet models.",
    link: "https://github.com/simon-hochmuth/portfolio/blob/master/Projects_From_Masters_Courses/Neural_Networks.pdf",
  },
  {
    title: "KMeans Clustering on Soil Data",
    description: "Clustering satellite data using k-means.",
    link: "https://github.com/simon-hochmuth/portfolio/blob/master/Projects_From_Masters_Courses/K-means%20Clustering.pdf",
  },
  {
    title: "Ensemble Models for Churn",
    description: "Using ensemble methods to predict customer churn.",
    link: "https://github.com/simon-hochmuth/portfolio/blob/master/Projects_From_Masters_Courses/Ensemble_Models.pdf",
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
