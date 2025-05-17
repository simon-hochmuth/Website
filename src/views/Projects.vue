<template>
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
    />

    <h3 class="text-2xl font-semibold text-gray-700 mt-10 mb-4">
      Master’s Course Reports (PDFs)
    </h3>
    <ProjectCard
      v-for="(project, index) in mastersReports"
      :key="'ms-' + index"
      :title="project.title"
      :description="project.description"
      :link="project.link"
    />
  </div>
</template>

<script setup>
import ProjectCard from "@/components/ProjectCard.vue";

const notebooks = [
  {
    title: "NYC 311 API Project",
    description:
      "Data pipeline project for fetching, cleaning, and analyzing NYC 311 service requests.",
    link: "https://github.com/simon-hochmuth/portfolio/tree/master/src/scripts/NYC_311_API_Project/notebooks/311_eda.ipynb",
  },
  {
    title: "Ship Prediction in Satellite Images",
    description:
      "Using Deep Learning Neural Networks to detect ships in satellite imagery.",
    link: "https://github.com/simon-hochmuth/portfolio/blob/master/Notebooks/Deep_Learning_Ship_Dataset.ipynb",
  },
  {
    title: "Grouping of Credit Accounts",
    description: "Developing marketing strategies using unsupervised ML.",
    link: "https://github.com/simon-hochmuth/portfolio/blob/master/Notebooks/Credit_card_dataset.ipynb",
  },
  {
    title: "Predicting Wine Rankings",
    description: "Supervised ML model to predict wine quality scores.",
    link: "https://github.com/simon-hochmuth/portfolio/blob/master/Notebooks/Supervised_Learning_Wine.ipynb",
  },
  {
    title: "SQL Dataset Manipulation",
    description: "Using SQL in Python for data transformation and querying.",
    link: "https://github.com/simon-hochmuth/portfolio/blob/master/Notebooks/SQL_in_Python.ipynb",
  },
  {
    title: "Global Military Expenditure",
    description: "Exploratory analysis of worldwide military spending data.",
    link: "https://github.com/simon-hochmuth/portfolio/blob/master/Notebooks/Capstone_1_Military_Expenditure%20(2).ipynb",
  },
];

const mastersReports = [
  {
    title: "Reinforcement Learning",
    description: "Finding shortest paths using RL techniques.",
    link: "https://github.com/simon-hochmuth/portfolio/blob/master/Master_Course_Project_Reports/Reinforcement_Learning.pdf",
  },
  {
    title: "Deep Learning: Fashion MNIST",
    description: "Image classification using deep neural networks.",
    link: "https://github.com/simon-hochmuth/portfolio/blob/master/Master_Course_Project_Reports/Deep_Learning_MNIST_FASHION.pdf",
  },
  {
    title: "Regression & Data Mining",
    description: "Predictive maintenance via regression models.",
    link: "https://github.com/simon-hochmuth/portfolio/blob/master/Master_Course_Project_Reports/Log_Regression_and_Data_Mining.pdf",
  },
  {
    title: "SVM Models",
    description: "SVM-based classification for device failure prediction.",
    link: "https://github.com/simon-hochmuth/portfolio/blob/master/Master_Course_Project_Reports/SVM_Models.pdf",
  },
  {
    title: "Decision Tree Models with Cognos",
    description: "Using Cognos to analyze billionaire data trends.",
    link: "https://github.com/simon-hochmuth/portfolio/blob/master/Master_Course_Project_Reports/Decision_Tree_Models_with_Cognos.pdf",
  },
  {
    title: "Neural Networks on Diabetes Data",
    description: "Exploring health data using basic NNet models.",
    link: "https://github.com/simon-hochmuth/portfolio/blob/master/Master_Course_Project_Reports/Neural_Networks.pdf",
  },
  {
    title: "KMeans Clustering on Soil Data",
    description: "Clustering satellite data using k-means.",
    link: "https://github.com/simon-hochmuth/portfolio/blob/master/Master_Course_Project_Reports/K-means%20Clustering.pdf",
  },
  {
    title: "Ensemble Models for Churn",
    description: "Using ensemble methods to predict customer churn.",
    link: "https://github.com/simon-hochmuth/portfolio/blob/master/Master_Course_Project_Reports/Ensemble_Models.pdf",
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
