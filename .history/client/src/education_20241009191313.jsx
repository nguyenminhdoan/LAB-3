import '../src/index.css'
import '../src/education.css'
import academic from '../src/assets/academic.jfif';
export default function Education() {
     return (
     <>
   
    <h2 className="worksTitle">Academic Qualification</h2>
    <div>
    <img src={academic} alt="acada1" className="worksImg"  width="1000px" height="80px"/><br/><br/>
    </div>

    <form id="ppy">

                    <label htmlFor="myTitle"> *Title: </label>
				<input type="text" id="myTitle" name="myTitle" required="required" autoFocus /> <br /> <br />
				
			
				<label htmlFor="myFName"> *First Name: </label>
				<input type="text" id="myFName" name="myFName" required="required" autoFocus /> <br /> <br />
				
				<label htmlFor="myLName"> *Last Name: </label>
				<input type="text" id="myLName" name="myLName" required="required" /> <br /> <br />
				
				
				<label htmlFor="myEmail"> *Email: </label>
				<input type="email" id="myEmail" name="myEmail" required="required" /> <br /> <br />
				
                    <label htmlFor="myDate"> *Completion Date: </label>
				<input type="date" id="myDate" name="myDate" required="required" /> <br /> <br />
				
                    <label htmlFor="myDescription"> *Description: </label>
				<input type="text" id="myDescription" name="myDescription" required="required" /> <br /> <br />

				<input type="submit" className="submit" value="Submit" /> <br />
					
		
		</form> 
         <br/>
     </>
     );
     }
    