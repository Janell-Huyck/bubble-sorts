arr_1 = []
arr_2 = [1]
arr_3 = [4,1,3,2]
arr_4 = [54, 25, 55, 55, 12, 0, -256, -1, 12595834443047903424302947]
arr_5 = [35, 43, 44, 56, 58, 17, 13, 29, 12, 46, 81, 8, 36, 48, 26, 6, 84, 76, 21, 91, 46, 21, 72, 49, 15, 97, 21, 5, 72, 20, 11, 9, 6, 9, 44, 40, 3, 56, 34, 67, 67, 55, 53, 71, 54, 21, 8, 60, 98, 60, 83, 93, 67, 69, 53, 41, 56, 56, 56, 85, 27, 29, 58, 75, 9, 87, 15, 88, 83, 66, 68, 84, 38, 42, 6, 61, 74, 62, 4, 20, 55, 59, 85, 8, 41, 61, 92, 29, 90, 45, 66, 76, 32, 29, 10, 47, 6, 31, 81, 21]

test_arrays = [arr_1, arr_2, arr_3, arr_4, arr_5]

puts 'Before sort: '
test_arrays.each do |sample|
    p sample
    puts
end



test_arrays.each do |test|
    switched = true
    if test.length < 2
        next test
    end
    max_index = test.length - 2
    while switched 
        switched = false
        0.upto(max_index) do |i|
            if test[i] > test[i + 1]
                test[i], test[i+1] = test[i + 1], test[i]
                switched = true
            end
        end

    end
end

puts 'After sort: '
puts
test_arrays.each do |sample|
    p sample
    puts
end
