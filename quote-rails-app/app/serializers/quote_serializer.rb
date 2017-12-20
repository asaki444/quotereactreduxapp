class QuoteSerializer < ActiveModel::Serializer
  attributes :id, :text, :author, :likes
end
