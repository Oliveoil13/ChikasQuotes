// Get all the section elements
const sections = document.querySelectorAll('h2');

// Function to check which section is in the viewport
function updateActiveSection() {
  
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;

  // Iterate through each section and find the one in the viewport
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;

    // Adjust this value to determine when the link should be considered active
    const activationThreshold = 0.6; // 50% of the section's height
    if (scrollPosition === 0) {
      // Set the "Main Items" link as active
      const mainItemsLink = document.getElementById('main-items-link');
      if (mainItemsLink) {
        mainItemsLink.classList.add('active');
      }
      const kitchenLink = document.getElementById('kitchen-additions-link');
      if (kitchenLink) {
        kitchenLink.classList.remove('active');
      }
      const DeepLink = document.getElementById('deep-clean-items-link');
      if (kitchenLink) {
        DeepLink.classList.remove('active');
      }
      const ExtraLink = document.getElementById('extra-items-link');
      if (kitchenLink) {
        ExtraLink.classList.remove('active');
      }

      
    } else if (
      scrollPosition + windowHeight * activationThreshold >= sectionTop &&
      scrollPosition <= sectionBottom - windowHeight * (1 - activationThreshold)
    ) {
      // Set the corresponding sidebar link as active
      const sectionId = section.getAttribute('id');
      const sidebarLink = document.querySelector(`.sidebar a[href="#${sectionId}"]`);

      // Remove 'active' class from all links
      document.querySelectorAll('.sidebar a').forEach(link => link.classList.remove('active'));

      // Add 'active' class to the current link
      if (sidebarLink) {
        sidebarLink.classList.add('active');
      }
    }
  });
}
// Function to handle click on sidebar links
function handleSidebarLinkClick(event) {
  event.preventDefault(); // Prevent the default behavior of the link
  
  
  const clickedLink = event.currentTarget;

  // Remove 'active' class from all links
  document.querySelectorAll('.sidebar a').forEach(link => link.classList.remove('active'));

  // Add 'active' class to the clicked link
  clickedLink.classList.add('active');

  // Scroll to t#815886esponding section with an offset
  const targetSectionId = clickedLink.getAttribute('href').substring(1);
  const targetSection = document.getElementById(targetSectionId);
  if (targetSection) {
    const offsetPercentage = 0.3; // Adjust this value as needed (percentage of viewport height)
    const offset = window.innerHeight * offsetPercentage;

    window.scrollTo({
      top: targetSection.offsetTop - offset,
      behavior: 'smooth'
    });
  }
}



// Attach the function to the scroll event
window.addEventListener('scroll', updateActiveSection);

// Attach click event listener to each sidebar link
document.querySelectorAll('.sidebar a').forEach(link => {
  link.addEventListener('click', handleSidebarLinkClick);
});

// Call the function on page load to set the initial active section
window.addEventListener('load', () => {
  // Set the "CIB" link as active by default
  const defaultLink = document.getElementById('main-items-link');
  if (defaultLink) {
    defaultLink.classList.add('active');
  }

  // Update the active section based on scroll position
  updateActiveSection();
});