## Slide Up CSS Modals
Sleek Sliding Modals, the way they should be .. Simple !

### Usage
- Drop in the `slideup.css` and `slideup.jquery.js` into your HTML file. For example

		<!DOCTYPE html>
		<html>
		<head>
		<meta charset="UTF-8">
		<link rel="stylesheet" href="css/slideup.css">
		</head>
		<body>
		<script src="js/libs/slideup.jquery.js"></script>
		</body>
		</html>
- Create the Modal, give it the class `slideup-modal` then add a unique id ( Can be anything, but Compulsary ) and drop in your content.

		<div id="someId" class="slideup-modal">
			<h2>Loremipsum</h2>
			<p>lorem-ipsum</p>
		</div>
- Create the trigger ( Make sure it's an anchor tag ) and give it the attribute of `data-reveal-id` and set it equal to the ID of your modal

		<a href="#" data-reveal-id="someId" >Launch the Modal</a>
- Make sure the images have the correct path !
-Have Fun !

### Options
- All the modal styles and fully editable in CSS
- Go to `slideup.jquery.js` and look at the section under options,
you can change the speed, background click close and the class that closes the modal

### JavaScript Triggers
- Close Modal : `var modal = $('.slideup-modal');modal.trigger('reveal:close');`
- Open Modal : Find it out yourself !

### License

