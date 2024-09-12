class ContactMailer < ApplicationMailer
  default from: 'kevinou69400@gmail.com'

  def send_contact_email
    @contact = params[:contact]

    mail(
      to: 'kevinrossi@free.fr',
      reply_to: @contact.email,
      subject: "Vous avez reçu un message de #{@contact.name}"
    )
  end
end
