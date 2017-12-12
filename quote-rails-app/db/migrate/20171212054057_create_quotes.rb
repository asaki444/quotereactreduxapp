class CreateQuotes < ActiveRecord::Migration[5.0]
  def change
    create_table :quotes do |t|
      t.text :text
      t.integer :author_id

      t.timestamps
    end
  end
end
