class CreateReadStatuses < ActiveRecord::Migration
  def change
    create_table :read_statuses do |t|
      t.string :name, null: false

      t.timestamps null: false
    end
  end
end
