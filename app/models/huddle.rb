# == Schema Information
#
# Table name: huddles
#
#  id           :integer          not null, primary key
#  title        :string           not null
#  group_id     :integer          not null
#  description  :text             not null
#  date         :datetime         not null
#  location     :string           not null
#  founded_on   :date             not null
#  moderator_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Huddle < ApplicationRecord
end