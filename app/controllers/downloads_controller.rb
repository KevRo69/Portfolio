class DownloadsController < ApplicationController
  def show
    file_path = Rails.root.join('public','CV_Kévin_Rossi_FR.pdf')
    send_file file_path, type: 'application/octet-stream', filename: 'CV_Kévin_Rossi_FR.pdf', disposition: 'attachment'
  end
end
