# React Image API Project

## The General Concept of the Project

This application allows users to search for images using specific keywords. The search results are dynamically updated with data fetched from the API and displayed as a list of images. The application employs a component-based structure, enabling each component to fulfill a specific function, which enhances the reusability of the code.

- General Structure

* The project includes the App component as the main component.
* The App component manages the necessary state (images) for performing the search operation and a function (handleSubmit) to initiate the search.
* The SearchHeader component contains a form to collect the search term from the user.
* The ImageList component is used to display the search results.

- App Component

    * State Management: A state variable named images is defined using the useState hook. This variable holds the search results.
    * Functions:
        * handleSubmit: Calls the searchImages function with the search term obtained from the user and updates the results using setImages.
    * Render Process: The handleSubmit function is passed as a prop to the SearchHeader component, allowing it to send data to the main component when the user performs a search. Additionally, the images state is passed as a prop to the ImageList component.

- SearchHeader Component

    * Form Structure: Contains a form to collect the search term from the user. The handleFormSubmit function is triggered when the form is submitted.
    * State Management: A state variable named valueInput is used to manage the value in the input field. As the user types in the input field, valueInput is updated through the handleChange function.
    * Search Operation: When the form is submitted, the search term entered by the user is sent to the App component via the search prop.

- Communication with the API (searchImages)

    * Using Axios: The searchImages function sends a GET request to the Unsplash API. This request includes the search term (term) along with the API key (Authorization).
    * Data Processing: The response from the API contains the search results in response.data.results. These results are returned to the App component and updated there using setImages.

- ImageList Component

    * Image Listing: The ImageList creates an ImageItem component for each image it receives through the imagesPlaceHolder prop by mapping over them.
    * Component for Each Image: Each ImageItem component displays a small-sized version of the corresponding image.

- ImageItem Component

    * Image Display: The ImageItem displays the relevant image through the image prop passed to it. The source URL of the image and its alternative description (alt text) are used.
