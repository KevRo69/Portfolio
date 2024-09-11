class RemovePhoneFromContact < ActiveRecord::Migration[7.1]
  def change
    remove_column :contacts, :phone, :string
    remove_column :contacts, :first_name, :string
    remove_column :contacts, :title, :string
    rename_column :contacts, :last_name, :name
  end
end
