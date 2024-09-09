class ContactMailer < ApplicationMailer
  def send_contact_email
    @contact = params[:contact]

    mail(
      to: 'kevinrossi@free.fr',
      from: @contact.email,
      subject: "#{@contact.title}"
    )
  end
end
