export const contactForm = () => {
    return(
        <form>
            <input type="text" name="name" placeholder="Name" id="name" value=""></input>
            <input type="email" name="email" placeholder="Email" id="email" value=""></input>
            <input type="text" name="subject" placeholder="Subject" id="subject" value=""></input>
            <textarea type="text" name="message" placeholder="Message" id="message" value=""></textarea>
            <input type="submit" value="send" />
        </form>
    )
}