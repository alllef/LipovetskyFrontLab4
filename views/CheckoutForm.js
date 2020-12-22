import {} from "../Client.js";
import {default as cartView} from "./CartTemplate.js";
export default async function view() {
    return `
<form id ="CheckoutForm">

<input type = "tel" name ="Telephone" placeholder="Telephone" class="form-part" pattern="[0]{1}[0-9]{9}" required>
<input type = "email" name ="E-mail" placeholder="E-mail" class="form-part"  required>

<fieldset class="form-part" id = "fullName">
<label for = "fullName">Full name</label>
<input type = "text" name ="Name" placeholder="Name" class="form-part" required>
<input type ="text" name = "Surname" placeholder="Surname"   class="form-part" required>
<input type = "text" name = "Patronymic" placeholder="Patronymic" class="form-part" required>
</fieldset>
<div>
<label for = "delivery">Delivery date</label>
<input type ="datetime-local" name ="delivery-date"  class="form-part" required>
</div>
<div>
<label for = "paymentType">Payment type</label>
<select name="paymentType"  class="form-part">

  <option>Cash</option>
  <option>Card</option>
  <option>Bitcoin</option>
  
</select>
</div>
<input type="submit" name="submitButton"    value="Order"/>
</form>

`
}


