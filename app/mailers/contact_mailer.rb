class ContactMailer < ApplicationMailer
  def send_contact_email
    @contact = params[:contact]

    mail(
      to: 'kevinrossi@free.fr',
      from: @contact.email,
      subject: "Vous avez reçu un message de #{@contact.name}"
    )
  end
end
