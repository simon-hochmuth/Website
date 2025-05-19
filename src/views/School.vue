<template>
  <section class="max-w-3xl mx-auto px-4 py-12">
    <h2 class="text-4xl font-bold text-center text-gray-800 mb-12">
      Education Summary
    </h2>

    <!-- Formal Education -->
    <div class="mb-10">
      <h3 class="text-2xl font-semibold text-blue-700 mb-6">
        Formal Education
      </h3>

      <!-- Master's -->
      <div
        class="bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-6"
      >
        <h4 class="text-xl font-bold text-gray-800">
          University of Maryland Global Campus
        </h4>
        <p class="text-gray-700 italic mb-0.5">
          M.S. in Data Science – Aug 2024
        </p>

        <!-- Summary of Work -->
        <p class="text-gray-600 mb-4">
          <strong>Summary of Work:</strong> Completed a comprehensive curriculum
          focused on applied data science, covering predictive modeling, data
          engineering, and analytics strategy. Projects included building
          end-to-end machine learning pipelines, designing ETL workflows,
          analyzing structured and unstructured data using Spark and Hadoop, and
          creating interactive dashboards to support executive decision-making.
          Capstone work integrated statistical modeling, visualization, and
          cloud-based tooling to address real-world business challenges.
        </p>

        <p class="text-gray-600 mb-4">
          <strong>Coursework:</strong> Machine Learning, Data Management, Data
          Visualization, Big Data Analytics, Predictive Modeling, Statistical
          Methods, Deep Learning, Cloud Computing, AI Integration, Decision
          Management Systems
        </p>
        <p class="text-gray-600 mb-4">
          <strong>Tools:</strong> Python, R, SQL, NoSQL, Hadoop, Spark, IBM
          Cognos, IBM Watson, Tableau, Jupyter, R Studio, Git, AWS, MongoDB,
          TensorFlow, Keras
        </p>

        <ul class="text-sm list-disc list-inside text-gray-600 space-y-2 mb-4">
          <strong>Projects:</strong>
          <li>
            Built churn prediction models using logistic regression and random
            forests
          </li>
          <li>
            Created executive dashboards in Tableau for healthcare analytics
          </li>
          <li>Used Neural Networks to classify diabetes in Pima Indians</li>
          <li>Analyzed attrition data using Spark and Python</li>
          <li>
            Performed sentiment analysis on airline tweets using IBM Db2, SQL,
            and R
          </li>
          <li>
            Developed a conversational AI chatbot for a ski resort with IBM
            Watson
          </li>
        </ul>

        <a
          href="/UMD_Masters_Transcript.pdf"
          target="_blank"
          class="text-blue-600 hover:underline text-sm"
        >
          View Unofficial Master's Transcript → GPA: 4.00 / 4.00
        </a>
      </div>

      <!-- Bachelor's -->
      <div class="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
        <h4 class="text-xl font-bold text-gray-800">
          University of Maryland, College Park
        </h4>
        <p class="text-gray-700 italic mb-0.5">
          B.S. in Aerospace Engineering – May 2018
        </p>

        <p class="text-gray-600 mb-4">
          <strong>Coursework:</strong> Linear Algebra, Flight Software Systems,
          Technical Writing, Controls of Aerospace Systems, Flight Dynamics,
          Aerospace Computing, Navigation, Thermodynamics, Electrical Systems,
          Aerospace Instrumentation, Space Propulsion, Systems Engineering, Data
          Acquisition
        </p>

        <p class="text-gray-600 mb-4">
          <strong>Tools:</strong> C++, MATLAB, Python, Simulink, SolidWorks,
          AutoCAD, STK (Systems Tool Kit), Git, Excel, LabVIEW
        </p>

        <ul class="text-sm list-disc list-inside text-gray-600 space-y-2 mb-4">
          <strong>Projects:</strong>
          <li>
            Created a MATLAB-based rocket landing simulation using predictive
            control and thrust stabilization
          </li>
          <li>
            2nd Place in NASA RASC-AL Space Habitat System Design Competition
          </li>
          <li>
            Integrated LIDAR-based sensing and control logic into autonomous UAV
            navigation systems for real-time obstacle detection and adaptive
            flight pathing
          </li>
        </ul>

        <a class="text-blue-600 hover:underline text-sm">
          Bachelor's → GPA: 3.34 / 4.00
        </a>
      </div>
    </div>
    <hr class="my-8 border-blue-600" />
    <!-- Informal Education -->
    <div>
      <h3 class="text-2xl font-semibold text-blue-700 mb-6">
        Informal Education
      </h3>

      <!-- Chegg Bootcamp -->
      <div
        class="bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-6"
      >
        <h4 class="text-xl font-bold text-gray-800">
          Chegg Data Science Bootcamp
        </h4>
        <p class="text-gray-700 italic mb-2">Completed 2020</p>
        <p class="text-gray-600 mb-2">
          <strong>Coursework:</strong> Python programming, Pandas and
          statistical modeling, Relational databases and SQL (joins,
          aggregation), A/B testing, Supervised learning (classification,
          regression, similarity models, random forests, SVMs, boosting),
          Unsupervised learning (clustering), Time series analysis, Deep
          learning, Big data, Career development (networking, interviewing)
        </p>
        <p class="text-gray-600 mb-2">
          <strong>Tools:</strong> Python, SQL, Pandas, NumPy, Scikit-learn,
          Matplotlib, Seaborn, TensorFlow, Keras
        </p>
        <a
          href="/Chegg_Certificate.pdf"
          target="_blank"
          class="text-blue-600 hover:underline text-sm"
        >
          View Certificate
        </a>
      </div>

      <!-- General Assembly Bootcamp -->
      <div class="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
        <h4 class="text-xl font-bold text-gray-800">
          General Assembly Data Science Bootcamp
        </h4>
        <p class="text-gray-700 italic mb-2">Completed 2021</p>
        <p class="text-gray-600 mb-2">
          <strong>Coursework:</strong> Experimental Design, A/B Testing, APIs,
          Time Series, Deep Learning<br />
          <strong>Tools:</strong> Python, SQL, Tableau, Spark, TensorFlow, Keras
        </p>
        <a
          href="/GeneralAssembly_Certificate.pdf"
          target="_blank"
          class="text-blue-600 hover:underline text-sm"
        >
          View Certificate
        </a>
      </div>
    </div>
    <hr class="my-8 border-blue-600" />
  </section>
</template>

<script setup></script>
