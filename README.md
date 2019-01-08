# Calculator App

### [View App](https://cryptic-brushlands-31769.herokuapp.com/)

The purpose of this app is practicing a short build from start to finish in one sitting. 

- Practicing jquery
- Streamlining Bootstrap usage
- Using a switch() statement

## Functionality:

- add
- subtract
- multiply 
- divide

### File Structure:

#### Basic MVC
|&#10236; server.js<br> 
|<br>
|&#10236; /views<br>
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8627; index.html<br>
|<br>
|&#10236; /routes<br>
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8627; htmlroutes.js<br>
|<br>
|&#10236; /public<br>
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8627; /assets<br>
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8627; /css<br>
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8627; style.css<br>
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8627; /js<br>
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8627; calApp.js<br>



### HTML
HTML page uses buttons with the values of 1-9, operators and an equals sign that will complete each equation and clear button to rest the page regardless of the state.

### Styles
The layout is done with a linked stylesheet (style.css) and the Bootstrap cdn for the grid system.

### JS/JQuery
Javascript file links to the above html file.   
It completes each operator's function while adding each equation and solution to the html page using jquery.

### Persistance
In it's current stage, this app has no persistance.

### Deployment
Deployed on Heroku: [**View App**](https://cryptic-brushlands-31769.herokuapp.com/)

### Notes

1. **Issue** &#10236; Second number shows all inputs. It should mimic the first number's input.<br>
**Solution** &#10236; Changed line 27 from .append() to .text(parseInt(firstNum) + " " + operator + " " + parseInt(secondNum)) <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8627; ***Fixed***

2. **Add Feature** &#10236; Add Info: even or odd.<br>
**Solution** &#10236; Added a function that triggers when the equals button is press and display the results of the function in an html div<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8627; ***Added***