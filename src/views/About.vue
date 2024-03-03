<template>
  <div class="about-section">
    <div class="inner-container">
      <h1>About Us</h1>
      <p class="text">
        At Spiza, we're on a mission to make Pula a more sustainable and compassionate community. Our platform connects people in need in the town of Pula with local restaurants, bakeries, and shops that have surplus food they would otherwise throw away. By redistributing this excess food to those who need it most, we aim to reduce food waste, promote sustainability, and help alleviate hunger in our community. Every day, countless nutritious meals are needlessly wasted, while many individuals and families struggle to put food on the table. Spiza bridges this gap by facilitating the donation of surplus food to those facing food insecurity. Together, we can create a more equitable and environmentally conscious society.
      </p>
      <div class="skills">
        <span>Web Design</span>
        <span>Photoshop & Illustrator</span>
        <span>Coding</span>
      </div>
      <router-link to="/Contact" class="action-text">
        <span>BECOME A PART OF SUSTAINABLE</span> 
        <span class="green-text">  COMMUNITY</span>.
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.about-section {
  background: url('@/assets/about.png') no-repeat right center;
  background-size: contain;
  background-color: #fdfdfd;
  overflow: hidden;
  padding: 100px 20px 50px; /* Added padding at the bottom */
}

.inner-container {
  max-width: 60%;
  margin: 0 auto; /* Center the inner container */
  margin-left: calc(50% - 35vw); /* Move 3.5cm to the left */
}

.inner-container h1 {
  margin-bottom: 30px;
  font-size: 36px; /* Reduced font size */
  font-weight: 900;
}

.text {
  font-size: 18px; /* Reduced font size */
  color: #545454;
  line-height: 40px;
  text-align: center; /* Center the text */
  margin-bottom: 20px; /* Reduced margin bottom */
  padding-right: 20px; /* Added padding right */
}

.skills {
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 13px;
}

.action-text {
  font-size: 46px;
  color: #545454; /* Same color as paragraph */
  text-decoration: none;
  cursor: pointer; /* Change cursor to pointer on hover */
  display: block; /* Ensure the text is displayed as a block element */
  text-align: center; /* Center the text horizontally */
  margin: 0 auto; /* Center the text horizontally */
}

.action-text .green-text {
  color: #545454; /* Green color */
  transition: color 0.3s; /* Smooth transition for color change */
  cursor: pointer; /* Change cursor to pointer on hover */
}

.action-text .green-text:hover {
  color: #50C878; /* Change color on hover */
}
</style>
