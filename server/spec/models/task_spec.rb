# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Task, type: :model do
  let(:task) { build(:task) }
  it 'should return task' do
    expect(task.present?).to eq(true)
  end
end
