class AddLikesToQuotes < ActiveRecord::Migration[5.0]
  def change
    add_column :quotes, :likes, :integer, :default => 0
  end
end
