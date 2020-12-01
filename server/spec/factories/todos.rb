FactoryBot.define do
  factory :todo do
    title { Faker::Lorem.word }
    finished { false }
    todo_id { nil }
  end
end
