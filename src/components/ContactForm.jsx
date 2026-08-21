function ContactForm() {
  return (
    <form action="" className="form">
      <div className="form-item">
        <label htmlFor="">Name</label>
        <input type="text" />
      </div>
      <div className="form-item">
        <label htmlFor="">Company Email</label>
        <input type="email" />
      </div>
      <div className="form-item">
        <label htmlFor="">Company Size</label>
        <select name="" id="">
          <option value="">50-100 employees</option>
          <option value="">100-200 employees</option>
          <option value="">Over 200 employees</option>
        </select>
      </div>
      <div className="form-item">
        <label htmlFor="">Subject</label>
        <select name="" id="">
          <option value="">Building Landing Pages</option>
          <option value="">About Pricing</option>
          <option value="">Others</option>
        </select>
      </div>
      <div className="form-item full-width-item">
        <label htmlFor="">Message</label>
        <textarea name="" id=""></textarea>
      </div>
      <button className="full-width-item">Contact Sales</button>
    </form>
  );
}

export default ContactForm;
