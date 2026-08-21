function ContactForm() {
  return (
    <form action="">
      <div>
        <label htmlFor="">Name</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="">Company Email</label>
        <input type="email" />
      </div>
      <div>
        <label htmlFor="">Company Size</label>
        <select name="" id="">
          <option value="">50-100 employees</option>
          <option value="">100-200 employees</option>
          <option value="">Over 200 employees</option>
        </select>
      </div>
      <div>
        <label htmlFor="">Subject</label>
        <option value="">Building Landing Pages</option>
        <option value="">About Pricing</option>
        <option value="">Others</option>
      </div>
      <div>
        <label htmlFor="">Message</label>
        <textarea name="" id=""></textarea>
      </div>
      <button>Contact Sales</button>
    </form>
  );
}

export default ContactForm;
