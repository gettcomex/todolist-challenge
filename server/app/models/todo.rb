class Todo < ApplicationRecord
  validates_presence_of :title, :finished
end
