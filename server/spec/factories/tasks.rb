# frozen_string_literal: true

FactoryBot.define do
  factory :task, class: Task do
    description { Faker::BossaNova.song }
    isDone { true }
  end
end
