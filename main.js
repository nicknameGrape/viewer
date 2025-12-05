"use strict"


import fitImage from "./js_modules/fitImage.mjs"
import fitText from "./js_modules/fitText.mjs"
import HatDraw from "./js_modules/HatDraw.mjs"

const SETS = {
	"Sad, Sick, Tired": [
		"sets/sad_sick_tired.png"
	],
	"Snow White! Are you OK?": [
		"sets/snow_white_00.jpg",
		"sets/snow_white_01.jpg",
		"sets/snow_white_02.jpg",
		"sets/snow_white_03.jpg",
		"sets/snow_white_04.jpg",
		"sets/snow_white_05.jpg",
		"sets/snow_white_06.jpg",
		"sets/snow_white_07.jpg",
		"sets/snow_white_08.jpg",
		"sets/snow_white_09.jpg",
		"sets/snow_white_10.jpg"
	],
	"Count Spiders": [
		"sets/count_spiders00.jpg",
		"sets/count_spiders01.jpg",
		"sets/count_spiders02.jpg",
		"sets/count_spiders03.jpg",
		"sets/count_spiders04.jpg",
		"sets/count_spiders05.jpg",
		"sets/count_spiders06.jpg",
		"sets/count_spiders07.jpg",
		"sets/count_spiders08.jpg",
		"sets/count_spiders09.jpg",
		"sets/count_spiders10.jpg",
		"sets/count_spiders11.jpg",
		"sets/count_spiders12.jpg",
		"sets/count_spiders13.jpg",
		"sets/count_spiders14.jpg",
		"sets/count_spiders15.jpg",
		"sets/count_spiders16.jpg",
		"sets/count_spiders17.jpg",
		"sets/count_spiders18.jpg",
		"sets/count_spiders19.jpg",
		"sets/count_spiders20.jpg",
		"sets/count_spiders21.jpg",
		"sets/count_spiders22.jpg",
		"sets/count_spiders23.jpg",
		"sets/count_spiders24.jpg",
		"sets/count_spiders25.jpg",
		"sets/count_spiders26.jpg",
		"sets/count_spiders27.jpg",
		"sets/count_spiders28.jpg",
		"sets/count_spiders29.jpg",
		"sets/count_spiders30.jpg",
		"sets/count_spiders31.jpg",
		"sets/count_spiders32.jpg",
		"sets/count_spiders33.jpg",
		"sets/count_spiders34.jpg",
		"sets/count_spiders35.jpg",
		"sets/count_spiders36.jpg",
		"sets/count_spiders37.jpg",
		"sets/count_spiders38.jpg",
		"sets/count_spiders39.jpg",
		"sets/count_spiders40.jpg",
		"sets/count_spiders41.jpg",
		"sets/count_spiders42.jpg",
		"sets/count_spiders43.jpg",
		"sets/count_spiders44.jpg",
		"sets/count_spiders45.jpg",
		"sets/count_spiders46.jpg",
		"sets/count_spiders47.jpg",
		"sets/count_spiders48.jpg",
		"sets/count_spiders49.jpg",
		"sets/count_spiders50.jpg",
		"sets/count_spiders51.jpg",
		"sets/count_spiders52.jpg",
		"sets/count_spiders53.jpg",
		"sets/count_spiders54.jpg",
		"sets/count_spiders55.jpg",
		"sets/count_spiders56.jpg",
		"sets/count_spiders57.jpg",
		"sets/count_spiders58.jpg",
		"sets/count_spiders59.jpg",
		"sets/count_spiders60.jpg"
	],
	"Sing a Rainbow": [
		"sets/sing_a_rainbow_00.png",
		"sets/sing_a_rainbow_01.png",
		"sets/sing_a_rainbow_02.png",
		"sets/sing_a_rainbow_03.png",
		"sets/sing_a_rainbow_04.png",
		"sets/sing_a_rainbow_05.png",
		"sets/sing_a_rainbow_06.png",
		"sets/sing_a_rainbow_07.png",
		"sets/sing_a_rainbow_08i.png",
		"sets/sing_a_rainbow_09can.png",
		"sets/sing_a_rainbow_10sing.png",
		"sets/sing_a_rainbow_11a.png",
		"sets/sing_a_rainbow_12rain.png",
		"sets/sing_a_rainbow_13bow.png",
		"sets/sing_a_rainbow_14singa.png",
		"sets/sing_a_rainbow_15rainbow.png",
		"sets/sing_a_rainbow_16singa2.png",
		"sets/sing_a_rainbow_17rainbow2.png",
		"sets/sing_a_rainbow_18now.png"
	],
	"どうぶつはANIMAL": [
		"sets/category_song_01_animal.png",
		"sets/category_song_02_vegetable.png",
		"sets/category_song_03_color.png",
		"sets/category_song_04_fruit.png",
		"sets/category_song_05_food_and_drink.png",
		"sets/category_song_06_character.png",
		"sets/category_song_07_sport_game.png"
	],
	"Phonics Words": [
		"sets/phonics_words_apple.jpg",
		"sets/phonics_words_book.jpg",
		"sets/phonics_words_crayon.jpg",
		"sets/phonics_words_drum.jpg",
		"sets/phonics_words_egg.jpg",
		"sets/phonics_words_fish.jpg",
		"sets/phonics_words_gorilla.jpg",
		"sets/phonics_words_hat.jpg",
		"sets/phonics_words_ink.jpg",
		"sets/phonics_words_jet.jpg",
		"sets/phonics_words_king.jpg",
		"sets/phonics_words_lemon.jpg",
		"sets/phonics_words_monkey.jpg",
		"sets/phonics_words_notebook.jpg",
		"sets/phonics_words_orange.jpg",
		"sets/phonics_words_pig.jpg",
		"sets/phonics_words_queen.jpg",
		"sets/phonics_words_rabbit.jpg",
		"sets/phonics_words_sun.jpg",
		"sets/phonics_words_tree.jpg",
		"sets/phonics_words_umbrella.jpg",
		"sets/phonics_words_violin.jpg",
		"sets/phonics_words_watch.jpg",
		"sets/phonics_words_x_box.jpg",
		"sets/phonics_words_yacht.jpg",
		"sets/phonics_words_zero.jpg"
	],
	"Mickey Mouse Shapes Song": [
		"sets/mmm_shape_song_1_mm_text.png",
		"sets/mmm_shape_song_2_mm_text.png",
		"sets/mmm_shape_song_3_mmm_text.png"
	],
	"Sayo's Live Show/Takeru's Double Date/Emily's Christmas Tree": [
		"sets/colors_shapes_sayo_makeup_0.png",
		"sets/colors_shapes_sayo_makeup_1.png",
		"sets/colors_shapes_sayo_makeup_2.png",
		"sets/colors_shapes_sayo_makeup_3.png",
		"sets/colors_shapes_sayo_makeup_4.png",
		"sets/colors_shapes_sayo_makeup_5.png",
		"sets/colors_shapes_sayo_makeup_6.png",
		"sets/colors_shapes_takeru_double_date_00.png",
		"sets/colors_shapes_takeru_double_date_01.png",
		"sets/colors_shapes_takeru_double_date_02.png",
		"sets/colors_shapes_takeru_double_date_03.png",
		"sets/colors_shapes_takeru_double_date_04.png",
		"sets/colors_shapes_takeru_double_date_05.png",
		"sets/colors_shapes_takeru_double_date_06.png",
		"sets/colors_shapes_takeru_double_date_07.png",
		"sets/colors_shapes_takeru_double_date_08.png",
		"sets/colors_shapes_takeru_double_date_09.png",
		"sets/colors_shapes_takeru_double_date_10.png",
		"sets/colors_shapes_takeru_double_date_11.png",
		"sets/colors_shapes_takeru_double_date_12a.png",
		"sets/colors_shapes_takeru_double_date_12.png",
		"sets/colors_shapes_takeru_double_date_13.png",
		"sets/colors_shapes_takeru_double_date_14.png",
		"sets/colors_shapes_takeru_double_date_15.png",
		"sets/colors_shapes_takeru_double_date_16.png",
		"sets/colors_shapes_takeru_double_date_17.png",
		"sets/colors_shapes_takeru_double_date_18.png",
		"sets/colors_shapes_takeru_double_date_19.png",
		"sets/colors_shapes_takeru_double_date_20.png",
		"sets/colors_shapes_takeru_double_date_21.png",
		"sets/colors_shapes_takeru_double_date_22.png",
		"sets/colors_shapes_takeru_double_date_23.png",
		"sets/colors_shapes_takeru_double_date_24.png",
		"sets/colors_shapes_emily_big_xmas_tree_00.png",
		"sets/colors_shapes_emily_big_xmas_tree_01.png",
		"sets/colors_shapes_emily_big_xmas_tree_02.png",
		"sets/colors_shapes_emily_big_xmas_tree_03.png",
		"sets/colors_shapes_emily_big_xmas_tree_04.png",
		"sets/colors_shapes_emily_big_xmas_tree_05.png",
		"sets/colors_shapes_emily_big_xmas_tree_06.png",
		"sets/colors_shapes_emily_big_xmas_tree_07.png",
		"sets/colors_shapes_emily_big_xmas_tree_08.png",
		"sets/colors_shapes_emily_big_xmas_tree_09.png",
		"sets/colors_shapes_emily_big_xmas_tree_10.png",
		"sets/colors_shapes_emily_big_xmas_tree_11.png",
		"sets/colors_shapes_emily_big_xmas_tree_12.png",
		"sets/colors_shapes_emily_big_xmas_tree_13.png",
		"sets/colors_shapes_emily_big_xmas_tree_14.png",
		"sets/colors_shapes_emily_big_xmas_tree_15.png",
		"sets/colors_shapes_emily_big_xmas_tree_16.png"
	],
	"Rain, Rain, Go Away": [
		"sets/rain_go_away_01_rain_go_away.jpg",
		"sets/rain_go_away_02a_sun_go_away.jpg",
		"sets/rain_go_away_02b_sun_go_away.jpg",
		"sets/rain_go_away_02_sun_go_away.jpg",
		"sets/rain_go_away_03a_clouds_go_away.jpg",
		"sets/rain_go_away_03b_clouds_go_away.jpg",
		"sets/rain_go_away_03_clouds_go_away.jpg",
		"sets/rain_go_away_04a_omg_rain.jpg",
		"sets/rain_go_away_04b_omg_rain.jpg",
		"sets/rain_go_away_04_omg_rain.jpg",
		"sets/rain_go_away_05_i_know_rain.jpg"
	],
	"Fun with Friends": [
		"sets/play_tag.jpg",
		"sets/play_dodgeball.jpg",
		"sets/play_dodgebee.jpg",
		"sets/play_snowman.jpg",
		"sets/play_cards.jpg",
		"sets/play_draw.jpg",
		"sets/play_jungle_gym.jpg",
		"sets/play_bugs.jpg",
		"sets/play_hide_and_seek.jpg",
		"sets/play_cops_and_robbers.jpg",
		"sets/play_snowball_fight.jpg",
		"sets/play_soccer.jpg",
		"sets/play_unicycles.jpg",
		"sets/play_video_games.jpg"
	],
	"Hey You!  Let's Play.": [
		"sets/lets_play_01.png",
		"sets/lets_play_02.png",
		"sets/lets_play_03.png",
		"sets/lets_play_04.png",
		"sets/lets_play_05.png",
		"sets/lets_play_08.png",
		"sets/lets_play_09.png",
		"sets/lets_play_10.png",
		"sets/lets_play_11.png",
		"sets/lets_play_12.png",
		"sets/lets_play_13.png"
	],
	"Days of the Week": [
		"sets/days_01_sunday.jpg",
		"sets/days_02_monday.jpg",
		"sets/days_03_tuesday.jpg",
		"sets/days_04_wednesday.jpg",
		"sets/days_05_thursday.jpg",
		"sets/days_06_friday.jpg",
		"sets/days_07_saturday.jpg"
	],
	"What Time Is It?": [
		"sets/what_time_0600_wake_up.png",
		"sets/what_time_0700_breakfast.png",
		"sets/what_time_1000_study.png",
		"sets/what_time_1200_lunch.png",
		"sets/what_time_1500_snack.png",
		"sets/what_time_1700_homework.png",
		"sets/what_time_1900_dinner.png",
		"sets/what_time_2000_bath.png",
		"sets/what_time_2100_bed.png",
		"sets/what_time_2700_dream.png"
	],
	"Do you have a pencil?": [
		"sets/do_you_have_a_pencil_lets_try_2.jpg"
	],
	"おやこ Hunt": [
		"sets/double_vision_00a.png",
		"sets/double_vision_00b.png",
		"sets/double_vision_00c.png",
		"sets/double_vision_01a.png",
		"sets/double_vision_01b.png",
		"sets/double_vision_01c.png",
		"sets/double_vision_02a.png",
		"sets/double_vision_02b.png",
		"sets/double_vision_02c.png",
		"sets/double_vision_03a.png",
		"sets/double_vision_03b.png",
		"sets/double_vision_03c.png",
		"sets/double_vision_04a.png",
		"sets/double_vision_04b.png",
		"sets/double_vision_04c.png",
		"sets/double_vision_05a.png",
		"sets/double_vision_05b.png",
		"sets/double_vision_05c.png",
		"sets/double_vision_06a.png",
		"sets/double_vision_06b.png",
		"sets/double_vision_06c.png",
		"sets/double_vision_07a.png",
		"sets/double_vision_07b.png",
		"sets/double_vision_07c.png",
		"sets/double_vision_08a.png",
		"sets/double_vision_08b.png",
		"sets/double_vision_08c.png",
		"sets/double_vision_09a.png",
		"sets/double_vision_09b.png",
		"sets/double_vision_09c.png",
		"sets/double_vision_10a.png",
		"sets/double_vision_10b.png",
		"sets/double_vision_10c.png",
		"sets/double_vision_11a.png",
		"sets/double_vision_11b.png",
		"sets/double_vision_11c.png",
		"sets/double_vision_12a.png",
		"sets/double_vision_12b.png",
		"sets/double_vision_12c.png",
		"sets/double_vision_13a.png",
		"sets/double_vision_13b.png",
		"sets/double_vision_13c.png",
		"sets/double_vision_14a.png",
		"sets/double_vision_14b.png",
		"sets/double_vision_14c.png",
		"sets/double_vision_15a.png",
		"sets/double_vision_15b.png",
		"sets/double_vision_15c.png",
		"sets/double_vision_16a.png",
		"sets/double_vision_16b.png",
		"sets/double_vision_16c.png",
		"sets/double_vision_17a.png",
		"sets/double_vision_17b.png",
		"sets/double_vision_17c.png",
		"sets/double_vision_18a.png",
		"sets/double_vision_18b.png",
		"sets/double_vision_18c.png",
		"sets/double_vision_19a.png",
		"sets/double_vision_19b.png",
		"sets/double_vision_19c.png",
		"sets/double_vision_20a.png",
		"sets/double_vision_20b.png",
		"sets/double_vision_20c.png",
		"sets/double_vision_21a.png",
		"sets/double_vision_21b.png",
		"sets/double_vision_21c.png",
		"sets/double_vision_22a.png",
		"sets/double_vision_22b.png",
		"sets/double_vision_22c.png",
		"sets/double_vision_23a.png",
		"sets/double_vision_23b.png",
		"sets/double_vision_23c.png",
		"sets/double_vision_24a.png",
		"sets/double_vision_24b.png",
		"sets/double_vision_24c.png",
		"sets/double_vision_25a.png",
		"sets/double_vision_25b.png",
		"sets/double_vision_25c.png"
	],
	"12 Months": [
		"sets/months_01_January.jpg",
		"sets/months_02_February.jpg",
		"sets/months_03_March.jpg",
		"sets/months_04_April.jpg",
		"sets/months_05_May.jpg",
		"sets/months_06_June.jpg",
		"sets/months_07_July.jpg",
		"sets/months_08_August.jpg",
		"sets/months_09_September.jpg",
		"sets/months_10_October.jpg",
		"sets/months_11_November.jpg",
		"sets/months_12_December.jpg"
	],
	"Can you use speak English?": [
		"sets/can_you_01english_card.jpg",
		"sets/can_you_02english_card.jpg",
		"sets/can_you_03well_card.jpg",
		"sets/can_you_04games_card.jpg",
		"sets/can_you_05badminton_card.jpg",
		"sets/can_you_06baseball_card.jpg",
		"sets/can_you_07basketball_card.jpg",
		"sets/can_you_08cook_card.jpg",
		"sets/can_you_09dance_card.jpg",
		"sets/can_you_10dodgeball_card.jpg",
		"sets/can_you_11guitar_card.jpg",
		"sets/can_you_12skate_card.jpg",
		"sets/can_you_13rope_card.jpg",
		"sets/can_you_14high_card.jpg",
		"sets/can_you_15kendama_card.jpg",
		"sets/can_you_16recorder_card.jpg",
		"sets/can_you_17piano_card.jpg",
		"sets/can_you_18sing_card.jpg",
		"sets/can_you_19ski_card.jpg",
		"sets/can_you_20soccer_card.jpg",
		"sets/can_you_21swim_card.jpg",
		"sets/can_you_22tennis_card.jpg",
		"sets/can_you_23unicycle_card.jpg",
		"sets/can_you_24volleyball_card.jpg",
		"sets/can_you_25ripstick_card.jpg",
		"sets/can_you_26fast_card.jpg",
		"sets/can_you_27umeboshi_card.jpg",
		"sets/can_you_28coffee_card.jpg",
		"sets/can_you_29pepper_card.jpg",
		"sets/can_you_30shiritori_card.jpg",
		"sets/can_you_31origami_card.jpg",
		"sets/can_you_32cartwheel_card.jpg",
		"sets/can_you_33fly_card.jpg",
		"sets/can_you_34drums_card.jpg",
		"sets/can_you_35judo_card.jpg",
		"sets/can_you_36parkour_card.jpg",
		"sets/can_you_37tetsubo_card.jpg",
		"sets/can_you_38language_card.jpg",
		"sets/can_you_39natto_card.jpg",
		"sets/can_you_40soroban_card.jpg"
	],
	"Animals Can": [
		"sets/animals_can_ant_walk.jpg",
		"sets/animals_can_bears_badminton.jpg",
		"sets/animals_can_boy_read.jpg",
		"sets/animals_can_butterfly_fly.jpg",
		"sets/animals_can_cat_recorder.jpg",
		"sets/animals_can_cat_swim.jpg",
		"sets/animals_can_crocodile_swim.jpg",
		"sets/animals_can_dolphin_jump.jpg",
		"sets/animals_can_elephant_soccer.jpg",
		"sets/animals_can_frog_jump.jpg",
		"sets/animals_can_girl_sing.jpg",
		"sets/animals_can_kangaroo_jump_rope.jpg",
		"sets/animals_can_penguin_dog_run.jpg",
		"sets/animals_can_penguin_fly.jpg",
		"sets/animals_can_penguins_soccer.jpg",
		"sets/animals_can_rabbit_piano.jpg"
	],
	"Animal Race": [
		"sets/animal_race_00.png",
		"sets/animal_race_01.png",
		"sets/animal_race_02.png",
		"sets/animal_race_03.png",
		"sets/animal_race_04.png",
		"sets/animal_race_05.png",
		"sets/animal_race_06.png",
		"sets/animal_race_07.png",
		"sets/animal_race_08.png",
		"sets/animal_race_09.png",
		"sets/animal_race_10.png",
		"sets/animal_race_11.png",
		"sets/animal_race_12.png",
		"sets/animal_race_13.png",
		"sets/animal_race_14.png",
		"sets/animal_race_15.png",
		"sets/animal_race_16.png",
		"sets/animal_race_17.png",
		"sets/animal_race_18.png",
		"sets/animal_race_19.png",
		"sets/animal_race_20.png",
		"sets/animal_race_21.png",
		"sets/animal_race_22.png",
		"sets/animal_race_23.png",
		"sets/animal_race_24.png",
		"sets/animal_race_25.png",
		"sets/animal_race_26.png",
		"sets/animal_race_27.png",
		"sets/animal_race_28.png",
		"sets/animal_race_29.png",
		"sets/animal_race_30.png",
		"sets/animal_race_31.png",
		"sets/animal_race_32.png",
		"sets/animal_race_33.png",
		"sets/animal_race_34.png",
		"sets/animal_race_35.png",
		"sets/animal_race_36.png",
		"sets/animal_race_37.png",
		"sets/animal_race_38.png",
		"sets/animal_race_39.png",
		"sets/animal_race_40.png",
		"sets/animal_race_41.png",
		"sets/animal_race_42.png",
		"sets/animal_race_43.png",
		"sets/animal_race_44.png",
		"sets/animal_race_45.png",
		"sets/animal_race_46.png",
		"sets/animal_race_47.png",
		"sets/animal_race_48.png",
		"sets/animal_race_49.png",
		"sets/animal_race_50.png",
		"sets/animal_race_51.png",
		"sets/animal_race_52.png",
		"sets/animal_race_53.png",
		"sets/animal_race_54.png",
		"sets/animal_race_55.png",
		"sets/animal_race_56.png",
		"sets/animal_race_57.png",
		"sets/animal_race_58.png",
		"sets/animal_race_59.png",
		"sets/animal_race_60.png",
		"sets/animal_race_61.png",
		"sets/animal_race_62.png",
		"sets/animal_race_63.png",
		"sets/animal_race_64.png",
		"sets/animal_race_65.png"
	],
	"Fast Mosquito": [
		"sets/fast_mosquito_00.png",
		"sets/fast_mosquito_01.png",
		"sets/fast_mosquito_02.png",
		"sets/fast_mosquito_03.png",
		"sets/fast_mosquito_04.png",
		"sets/fast_mosquito_05.png",
		"sets/fast_mosquito_06.png",
		"sets/fast_mosquito_07.png",
		"sets/fast_mosquito_08.png",
		"sets/fast_mosquito_09.png",
		"sets/fast_mosquito_10.png",
		"sets/fast_mosquito_11.png"
	],
	"Restaurant: Food/Drink Rap": [
		"sets/restaurant_rap_01.jpg",
		"sets/restaurant_rap_02.jpg",
		"sets/restaurant_rap_03.jpg",
		"sets/restaurant_rap_04.jpg",
		"sets/restaurant_rap_05.jpg",
		"sets/restaurant_rap_06.jpg",
		"sets/restaurant_rap_07.jpg",
		"sets/restaurant_rap_08.jpg",
		"sets/restaurant_rap_09.jpg",
		"sets/restaurant_rap_10.jpg",
		"sets/restaurant_rap_11.jpg",
		"sets/restaurant_rap_12.jpg",
		"sets/restaurant_rap_13.jpg",
		"sets/restaurant_rap_14.jpg",
		"sets/restaurant_rap_15.jpg",
		"sets/restaurant_rap_16.jpg"
	],
	"Restaurant: Levels of Polite": [
		"sets/restaurant_polite_01_japanese_junko.jpg",
		"sets/restaurant_polite_02_tango_dake_tanjirou.jpg",
		"sets/restaurant_polite_03_chotto_chigau_charlie.jpg",
		"sets/restaurant_polite_04_selfish_wakana.jpg",
		"sets/restaurant_polite_05_charming_mr_wood.jpg"
	],
	"Cool Clocks": [
		"sets/cool_clocks_1_1.jpg",
		"sets/cool_clocks_1_2.jpg",
		"sets/cool_clocks_1_3.jpg",
		"sets/cool_clocks_1_4.jpg",
		"sets/cool_clocks_1_5.jpg",
		"sets/cool_clocks_1_6a.jpg",
		"sets/cool_clocks_1_6b.jpg",
		"sets/cool_clocks_1_6c.jpg",
		"sets/cool_clocks_1_6d.jpg",
		"sets/cool_clocks_1_6.jpg",
		"sets/cool_clocks_1_cogsworth.jpg",
		"sets/cool_clocks_2_1.jpg",
		"sets/cool_clocks_2_2.jpg",
		"sets/cool_clocks_2_3.jpeg",
		"sets/cool_clocks_2_4.jpg",
		"sets/cool_clocks_2_5.jpg",
		"sets/cool_clocks_2_6.jpg",
		"sets/cool_clocks_2_7.jpg",
		"sets/cool_clocks_3_chain_clock.jpg",
		"sets/cool_clocks_3_creative-clocks-10-2.jpg",
		"sets/cool_clocks_3_creative-clocks-11-2.jpg",
		"sets/cool_clocks_3_creative-clocks-26.jpg",
		"sets/cool_clocks_3_creative-clocks-8.jpg",
		"sets/cool_clocks_3_running_alarm_clock.jpg",
		"sets/cool_clocks_3_youkai_watch_watch.jpeg",
		"sets/cool_clocks_4_bar_clock.jpg",
		"sets/cool_clocks_4_fan_clock.jpg",
		"sets/cool_clocks_4_gear_clock.jpg",
		"sets/cool_clocks_4_gun_alarm_clock.jpg",
		"sets/cool_clocks_4_sundial.JPG",
		"sets/cool_clocks_4_unique-minimalist-creative-watch-geek-swirl.jpg",
		"sets/cool_clocks_4_word_clock.jpg"
	],
	"I always go to school every day.": [
		"sets/iagtsed01.png",
		"sets/iagtsed02.png",
		"sets/iagtsed02a.png",
		"sets/iagtsed02b.png",
		"sets/iagtsed03.png",
		"sets/iagtsed04.png",
		"sets/iagtsed04a.png",
		"sets/iagtsed04b.png",
		"sets/iagtsed05.png",
		"sets/iagtsed06.png",
		"sets/iagtsed06a.png",
		"sets/iagtsed06b.png",
		"sets/iagtsed07.png",
		"sets/iagtsed08.png",
		"sets/iagtsed08a.png",
		"sets/iagtsed08b.png",
		"sets/iagtsed09.png"
	],
	"How I Hurt my Neck": [
		"sets/hihmn_baseball1.png",
		"sets/hihmn_baseball2.png",
		"sets/hihmn_baseball3.png",
		"sets/hihmn_baseball4.png",
		"sets/hihmn_beach1.png",
		"sets/hihmn_beach2.png",
		"sets/hihmn_beach3.png",
		"sets/hihmn_beach4.png",
		"sets/hihmn_beach5.png",
		"sets/hihmn_beach6.png",
		"sets/hihmn_beetle1.png",
		"sets/hihmn_beetle2.png",
		"sets/hihmn_beetle3.png",
		"sets/hihmn_festival1.png",
		"sets/hihmn_festival2.png",
		"sets/hihmn_festival3.png",
		"sets/hihmn_festival4.png",
		"sets/hihmn_festival5.png",
		"sets/hihmn_milkyway1.png",
		"sets/hihmn_milkyway2.png",
		"sets/hihmn_milkyway3.png",
		"sets/hihmn_panda1.png",
		"sets/hihmn_panda2.png",
		"sets/hihmn_panda3.png",
		"sets/hihmn_pool1.png",
		"sets/hihmn_pool2.png",
		"sets/hihmn_pool3.png",
		"sets/hihmn_zoo_kangaroo1.png",
		"sets/hihmn_zoo_kangaroo2.png",
		"sets/hihmn_zoo_kangaroo3.png",
		"sets/hihmn_zoo_kangaroo4.png",
		"sets/hihmn_zoo_kangaroo5.png",
		"sets/hihmn_zoo_kangaroo6.png",
		"sets/hihmn_zoo_kangaroo7.png"
	],
	"Summer Vacation Memories (Jokes)": [
		"sets/summer_vacation_jokes_baseball_game__diyzx46.png",
		"sets/summer_vacation_jokes_baseball_game__diyzx46g.png",
		"sets/summer_vacation_jokes_100_yen_shop_qga_cs0h.png",
		"sets/summer_vacation_jokes_100_yen_shop_qga_cs0hg.png",
		"sets/summer_vacation_jokes_fishing_oh62q9il.png",
		"sets/summer_vacation_jokes_fishing_oh62q9ilg.png",
		"sets/summer_vacation_jokes_camping_e1766s7c.png",
		"sets/summer_vacation_jokes_camping_e1766s7cg.png",
		"sets/summer_vacation_jokes_festival_jgh3k673.png",
		"sets/summer_vacation_jokes_festival_jgh3k673g.png",
		"sets/summer_vacation_jokes_fireworks_d6cl6kzw.png",
		"sets/summer_vacation_jokes_fireworks_d6cl6kzwg.png",
		"sets/summer_vacation_jokes_flea_market_jf9ussao.png",
		"sets/summer_vacation_jokes_flea_market_jf9ussaog.png",
		"sets/summer_vacation_jokes_friend_tdrb6a3q.png",
		"sets/summer_vacation_jokes_friend_tdrb6a3qg.png",
		"sets/summer_vacation_jokes_grandparents_7hvz2nudg.png",
		"sets/summer_vacation_jokes_big_bad_wolf.jpg",
		"sets/summer_vacation_jokes_dog_show_oqxpv6g6.png",
		"sets/summer_vacation_jokes_dog_show_oqxpv6g6g.png",
		"sets/summer_vacation_jokes_shopping_annotated.jpg",
		"sets/summer_vacation_jokes_shopping_annotatedg1.jpg",
		"sets/summer_vacation_jokes_shopping_annotatedg2.jpg",
		"sets/summer_vacation_jokes_shopping_annotatedg3.jpg",
		"sets/summer_vacation_jokes_Disneyland_0qc2gio8.png",
		"sets/summer_vacation_jokes_Disneyland_0qc2gio8g.png"
	],
	"Mary had a little lamb.": [
		"sets/mary_lamb_01.png",
		"sets/mary_lamb_02.png",
		"sets/mary_lamb_03.png",
		"sets/mary_lamb_04.png",
		"sets/mary_lamb_05.png",
		"sets/mary_lamb_06.png",
		"sets/mary_lamb_07.png",
		"sets/mary_lamb_08.png",
		"sets/mary_lamb_09.png",
		"sets/mary_lamb_10.png",
		"sets/mary_lamb_11.png",
		"sets/mary_lamb_12.png",
		"sets/mary_lamb_13.png",
		"sets/mary_lamb_14.png",
		"sets/mary_lamb_15.png"
	],
	"Going Places": [
		"sets/going_places_00.jpg",
		"sets/going_places_04a.jpg",
		"sets/going_places_04b.jpg",
		"sets/going_places_05a.jpg",
		"sets/going_places_05b.jpg",
		"sets/going_places_06a.jpg",
		"sets/going_places_06b.jpg",
		"sets/going_places_07a.jpg",
		"sets/going_places_07b.jpg",
		"sets/going_places_08a.jpg",
		"sets/going_places_08b.jpg",
		"sets/going_places_09a.jpg",
		"sets/going_places_09b.jpg",
		"sets/going_places_10a.jpg",
		"sets/going_places_10b.jpg",
		"sets/going_places_11a.jpg",
		"sets/going_places_11b.jpg",
		"sets/going_places_12.jpg"
	],
	"Tour Planner Card Game": [
		"sets/tour_planner_card_game_how_to_play_01.png",
		"sets/tour_planner_card_game_how_to_play_02.png",
		"sets/tour_planner_card_game_how_to_play_03.png",
		"sets/tour_planner_card_game_how_to_play_04.png",
		"sets/tour_planner_card_game_how_to_play_05.png",
		"sets/tour_planner_card_game_how_to_play_06.png",
		"sets/tour_planner_card_game_how_to_play_07.png",
		"sets/tour_planner_card_game_how_to_play_08.png",
		"sets/tour_planner_card_game_how_to_play_09.png",
		"sets/tour_planner_card_game_how_to_play_10.png",
		"sets/tour_planner_card_game_how_to_play_11.png",
		"sets/tour_planner_card_game_how_to_play_12.png",
		"sets/tour_planner_card_game_how_to_play_13.png",
		"sets/tour_planner_card_game_how_to_play_14.png",
		"sets/tour_planner_card_game_how_to_play_15.png",
		"sets/tour_planner_card_game_how_to_play_16.png",
		"sets/tour_planner_card_game_how_to_play_17.png",
		"sets/tour_planner_card_game_how_to_play_17a.png",
		"sets/tour_planner_card_game_how_to_play_17b.png",
		"sets/tour_planner_card_game_how_to_play_18.png",
		"sets/tour_planner_card_game_how_to_play_19.png",
		"sets/tour_planner_card_game_how_to_play_20.png"
	],
	"Country 3-Hint Quizzes": [
		"sets/country_quizzes_australia1.jpg",
		"sets/country_quizzes_australia2.jpg",
		"sets/country_quizzes_australia3.jpg",
		"sets/country_quizzes_australia4.jpg",
		"sets/country_quizzes_brazil1.jpg",
		"sets/country_quizzes_brazil2.jpg",
		"sets/country_quizzes_brazil3.jpg",
		"sets/country_quizzes_brazil4.jpg",
		"sets/country_quizzes_canada1.jpg",
		"sets/country_quizzes_canada2.jpg",
		"sets/country_quizzes_canada3.jpg",
		"sets/country_quizzes_canada4.jpg",
		"sets/country_quizzes_china1.jpg",
		"sets/country_quizzes_china2.jpg",
		"sets/country_quizzes_china3.jpg",
		"sets/country_quizzes_china4.jpg",
		"sets/country_quizzes_egypt1.jpg",
		"sets/country_quizzes_egypt2.jpg",
		"sets/country_quizzes_egypt3.png",
		"sets/country_quizzes_egypt4.jpg",
		"sets/country_quizzes_finland1.jpg",
		"sets/country_quizzes_finland2.jpg",
		"sets/country_quizzes_finland3.jpg",
		"sets/country_quizzes_finland4.jpg",
		"sets/country_quizzes_france1.jpg",
		"sets/country_quizzes_france2.jpg",
		"sets/country_quizzes_france3.jpg",
		"sets/country_quizzes_france4.jpg",
		"sets/country_quizzes_germany1.jpg",
		"sets/country_quizzes_germany2.jpg",
		"sets/country_quizzes_germany3.jpg",
		"sets/country_quizzes_germany4.jpg",
		"sets/country_quizzes_india1.jpg",
		"sets/country_quizzes_india2.png",
		"sets/country_quizzes_india3.png",
		"sets/country_quizzes_india4.jpg",
		"sets/country_quizzes_italy1.jpg",
		"sets/country_quizzes_italy2.jpg",
		"sets/country_quizzes_italy3.png",
		"sets/country_quizzes_italy4.jpg",
		"sets/country_quizzes_japan1.jpg",
		"sets/country_quizzes_japan2.jpg",
		"sets/country_quizzes_japan3.jpg",
		"sets/country_quizzes_japan4.jpg",
		"sets/country_quizzes_mexico1.jpg",
		"sets/country_quizzes_mexico2.jpg",
		"sets/country_quizzes_mexico3.jpg",
		"sets/country_quizzes_mexico4.jpg",
		"sets/country_quizzes_new_zealand1.jpg",
		"sets/country_quizzes_new_zealand2.jpg",
		"sets/country_quizzes_new_zealand3.jpg",
		"sets/country_quizzes_new_zealand4.jpg",
		"sets/country_quizzes_russia1.jpg",
		"sets/country_quizzes_russia2.jpg",
		"sets/country_quizzes_russia3.jpg",
		"sets/country_quizzes_russia4.jpg",
		"sets/country_quizzes_south_africa1.jpg",
		"sets/country_quizzes_south_africa2.jpg",
		"sets/country_quizzes_south_africa3.jpg",
		"sets/country_quizzes_south_africa4.jpg",
		"sets/country_quizzes_thailand1.jpg",
		"sets/country_quizzes_thailand2.jpg",
		"sets/country_quizzes_thailand3.jpg",
		"sets/country_quizzes_thailand4.jpg",
		"sets/country_quizzes_uk1.jpg",
		"sets/country_quizzes_uk2.jpg",
		"sets/country_quizzes_uk3.png",
		"sets/country_quizzes_uk4.jpg",
		"sets/country_quizzes_usa1.jpg",
		"sets/country_quizzes_usa2.jpg",
		"sets/country_quizzes_usa3.jpg",
		"sets/country_quizzes_usa4.jpg",
	],
	"Halloween Phonics": [
		"sets/halloween_phonics_a_0.jpg",
		"sets/halloween_phonics_a_1.jpg",
		"sets/halloween_phonics_b_0.jpg",
		"sets/halloween_phonics_b_1.jpg",
		"sets/halloween_phonics_c_0.jpg",
		"sets/halloween_phonics_c_1.jpg",
		"sets/halloween_phonics_d_0.jpg",
		"sets/halloween_phonics_d_1.jpg",
		"sets/halloween_phonics_e_0.jpg",
		"sets/halloween_phonics_e_1.jpg",
		"sets/halloween_phonics_f_0.jpg",
		"sets/halloween_phonics_f_1.jpg",
		"sets/halloween_phonics_g_0.jpg",
		"sets/halloween_phonics_g_1.jpg",
		"sets/halloween_phonics_h_0.jpg",
		"sets/halloween_phonics_h_1.jpg",
		"sets/halloween_phonics_i_0.jpg",
		"sets/halloween_phonics_i_1.jpg",
		"sets/halloween_phonics_j_0.jpg",
		"sets/halloween_phonics_j_1.jpg",
		"sets/halloween_phonics_k_0.jpg",
		"sets/halloween_phonics_k_1.jpg",
		"sets/halloween_phonics_l_0.jpg",
		"sets/halloween_phonics_l_1.jpg",
		"sets/halloween_phonics_m_0.jpg",
		"sets/halloween_phonics_m_1.jpg",
		"sets/halloween_phonics_n_0.jpg",
		"sets/halloween_phonics_n_1.jpg",
		"sets/halloween_phonics_o_0.jpg",
		"sets/halloween_phonics_o_1.jpg",
		"sets/halloween_phonics_p_0.jpg",
		"sets/halloween_phonics_p_1.jpg",
		"sets/halloween_phonics_q_0.jpg",
		"sets/halloween_phonics_q_1.jpg",
		"sets/halloween_phonics_r_0.jpg",
		"sets/halloween_phonics_r_1.jpg",
		"sets/halloween_phonics_s_0.jpg",
		"sets/halloween_phonics_s_1.jpg",
		"sets/halloween_phonics_t_0.jpg",
		"sets/halloween_phonics_t_1.jpg",
		"sets/halloween_phonics_u_0.jpg",
		"sets/halloween_phonics_u_1.jpg",
		"sets/halloween_phonics_v_0.jpg",
		"sets/halloween_phonics_v_1.jpg",
		"sets/halloween_phonics_w_0.jpg",
		"sets/halloween_phonics_w_1.jpg",
		"sets/halloween_phonics_x_0.jpg",
		"sets/halloween_phonics_x_1.jpg",
		"sets/halloween_phonics_y_0.jpg",
		"sets/halloween_phonics_y_1.jpg",
		"sets/halloween_phonics_z_0.jpg",
		"sets/halloween_phonics_z_1.jpg"
	]
}

const MUSIC = {
	"Beats: Old School": "music/old_school.mp3",
	"Beats: Hip Hop": "music/simple_hiphop.mp3",
	"Beats: House": "music/simple_house.mp3",
	"Beats: Fat Cat": "music/fat_cat.mp3",
	"Beats: Gym Beats": "music/gym_beats.mp3",
	"Cool Clocks Music": "music/clocks_music.mp3"
}

let ulSets = document.getElementById("image_sets");
let ulMusic = document.getElementById("music");
Object.entries(SETS).forEach(function (s) {
	console.log(s);
	let li = document.createElement("li");
	li.innerHTML = s[0];
	li.addEventListener("click", function (ev) {
		let set = SETS[ev.target.innerHTML];
		set.forEach(function (src) {
			console.log(src);
			let img = document.createElement("img");
			img.addEventListener("load", function () {
				ulSets.style.display = "none";
				ulMusic.style.display = "none";
				canvas.style.display = "block";
				draw();
			});
			console.log(images);
			img.src = src;
			images.push(img);
			previews.push(img.cloneNode(true));
		});
	});
	ulSets.appendChild(li);
});
Object.entries(MUSIC).forEach(function (m) {
	console.log(m);
	let li = document.createElement("li");
	let title = document.createElement("span");
	let audio = document.createElement("audio");
	audio.src = m[1];
	audio.controls = true;
	title.innerHTML = m[0];
	li.appendChild(title);
	li.appendChild(audio);
	ulMusic.appendChild(li);
});

function fitMontage(context, imgsArray, x, y, w, h, padding=0) {
	var canvas = context.canvas;

	if ( typeof x === "undefined" ){
		x = 0;
	}
	if ( typeof y === "undefined" ){
		y = 0;
	}
	if ( typeof w === "undefined" ){
		w = canvas.width;
	}
	if ( typeof h === "undefined" ){
		h = canvas.height;
	}

	//number of rows and columns that yields the squarest tiles with the least waste
	var wastes = [];
	for (var i=1; i<=imgsArray.length; i++) {
		var tileSize = Math.min(h / i, w / Math.floor(imgsArray.length / i));
		//var tileSize = h / i * imgsArray.length < w ? h / i : w / imgsArray.length;
		wastes.push(w * h - Math.pow(tileSize, 2) * imgsArray.length);
	}
	console.log(wastes);
	var rows = wastes.indexOf(Math.min(...wastes)) + 1;
	var cols = Math.ceil(imgsArray.length / rows);

	var tileWidth = w / cols;
	var tileHeight = h / rows;

	imgsArray.forEach(function (element, index, array) {
		//fitImg(context, element, tileWidth * (index % cols) + x, tileHeight * Math.floor(index / cols) + y, tileWidth, tileHeight);
		fitImage(context, element, tileWidth * (index % cols + padding/100) + x, tileHeight * (Math.floor(index / cols) + padding/100) + y, tileWidth*(100 - 2*padding)/100, tileHeight*(100 - 2*padding)/100);
	})
}

function draw() {
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.fillStyle = "yellow";
	var image = images[current];
	if (typeof image !== "undefined") {
		if (!hide) {
			if (!isZoomed) {
				if (tile) {
					fitMontage(context, images, 0, 0, canvas.width, canvas.height, 2);
				} else {
					fitImage(context, previews[current]);
					fitText(context, (current + 1) + "/" + images.length, 0, 0, 100, 50);
				}
			} else {
				var sub = getSub();
				fitImage(
					context, image,
					//subX, subY, subW, subH,
					sub.x, sub.y, sub.w, sub.h,
					0, 0, canvas.width, canvas.height
				);
			}
		}
	}
}

function getSub() {
	var image = images[current];
	var ix, iy, iw, ih;
	var subX, subY, subW, subH;
	if (image.width/image.height > canvas.width/canvas.height) { //wide image
		ix = 0;
		iw = canvas.width;
		ih = iw/image.width*image.height;
		iy = (canvas.height - ih)/2;
	} else { //tall image
		iy = 0;
		ih = canvas.height;
		iw = ih/image.height*image.width;
		ix = (canvas.width - iw)/2;
	}
	subX = (targetX - ix)*image.width/iw - zoom*canvas.width*image.width/iw/2;
	subY = (targetY - iy)*image.height/ih - zoom*canvas.height*image.height/ih/2;
	subW = zoom * canvas.width*image.width/iw;
	subH = zoom * canvas.height*image.height/ih;
	return {"x": subX, "y": subY, "w": subW, "h": subH};
}

function touchHandler(ev) {
	ev.preventDefault();
	var image = images[current];
	if (typeof image !== "undefined") {
		if (ev.type === "touchstart") {
			console.log("touchstart");
			if (!isZoomed) {
				if (ev.touches.length === 1) {
					console.log("first touch");
					targetX = ev.touches[0].clientX; targetY = ev.touches[0].clientY;
					isZoomed = true;
					draw()
				}
			} else {
				var now = performance.now();
				if (lastTouchAtTime === null) {
					lastTouchAtTime = now;
					console.log(lastTouchAtTime);
				} else {
					if ((now - lastTouchAtTime) < 400) {
						console.log("zoom reset");
						isZoomed = false;
						draw();
					} else {
						lastTouchAtTime = now;
					}
				}
			}
		} else if (ev.type === "touchmove") {
			console.log("touchmove");
			if (ev.touches.length === 1) {
				console.log("drag");
				targetX = ev.touches[0].clientX; targetY = ev.touches[0].clientY;
				draw();
			}
		} else if (ev.type === "touchend") {
			console.log("touchend");
			if (ev.touches.length === 0) {
				console.log("no more fingers");
			}
		}
	}
}


function mousedownHandler(ev) {
	clearTimeout(myTimeout);
	canvas.removeEventListener("mousemove", mousemoveHandler);
	isZoomed = true;
	draw();
}

function mouseupHandler(ev) {
	isZoomed = false;
	canvas.style.cursor = "";
	canvas.addEventListener("mousemove", mousemoveHandler);
	draw();
}


function mousemoveHandler(ev) {
	clearTimeout(myTimeout);
	isZoomed = false;
	targetX = ev.clientX; targetY = ev.clientY;
	if (typeof images[current] !== "undefined") {
		draw();
		context.strokeRect(
			ev.clientX - canvas.width * zoom/2,
			ev.clientY - canvas.height * zoom/2,
			canvas.width * zoom,
			canvas.height * zoom
		);
	}
	myTimeout = setTimeout(function () {draw();}, 200);
}

function zoomLevelIncrease() {
	zoom += .04;
	if (zoom > 1) {
		zoom = 1
	}
}

function zoomLevelDecrease() {
	zoom -= .04;
	if (zoom < .01) {
		zoom = .01
	}
}

function wheelHandler(ev) {
	if (ev.deltaY > 0) {
		zoomLevelIncrease();
	}
	if (ev.deltaY < 0) {
		zoomLevelDecrease();
	}
	draw();
	context.strokeRect(
		ev.clientX - canvas.width * zoom/2,
		ev.clientY - canvas.height * zoom/2,
		canvas.width * zoom,
		canvas.height * zoom
	);
}

document.addEventListener('contextmenu', event => event.preventDefault());

function dropHandler(ev) {
	console.log('File(s) dropped');

	// Prevent default behavior (Prevent file from being opened)
	ev.preventDefault();

	if (ev.dataTransfer.items) {
		// Use DataTransferItemList interface to access the file(s)
		for (var i = 0; i < ev.dataTransfer.items.length; i++) {
			// If dropped items aren't files, reject them
			if (ev.dataTransfer.items[i].kind === 'file') {
				var file = ev.dataTransfer.items[i].getAsFile();
				console.log(file);
				if (!file.type.startsWith('image/')){ continue }

				const img = document.createElement("img");
				img.classList.add("obj");
				img.file = file;
				img.onload = function () {
					loaded += 1;
					if (loaded == images.length) {
						previews = images.map(function (o) {
							var PVSIZE = 800;
							var preview = document.createElement("canvas");
							if (o.width > o.height) {
								preview.width = PVSIZE;
								preview.height = PVSIZE/o.width*o.height;
							} else {
								preview.height = PVSIZE;
								preview.width = PVSIZE/o.height*o.width;
							}
							var pvContext = preview.getContext("2d");
							fitImage(pvContext, o);
							return preview;
						});
						console.log(previews);
					}
				};
				images.push(img);
				let indexes = [];
				for (let i=0;i<images.length;i++) {
					indexes.push(i);
				}
				hd = new HatDraw(indexes);
				const reader = new FileReader();
				reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
				reader.readAsDataURL(file);
			}
		}
	} else {
		// Use DataTransfer interface to access the file(s)
		for (var i = 0; i < ev.dataTransfer.files.length; i++) {
			console.log('... file[' + i + '].name = ' + ev.dataTransfer.files[i].name);
		}
	}
}

function dragOverHandler(ev) {
	// Prevent default behavior (Prevent file from being opened)
	ev.preventDefault();
}

function handleFiles(files) {
	for (let i = 0; i < files.length; i++) {
		const file = files[i];

		if (!file.type.startsWith('image/')){ continue }

		const img = document.createElement("img");
		img.classList.add("obj");
		img.file = file;
		preview.appendChild(img); // Assuming that "preview" is the div output where the content will be displayed.

		const reader = new FileReader();
		reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
		reader.readAsDataURL(file);
	}
}

var canvas = document.getElementById("myCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var context = canvas.getContext("2d");
var images = [];
var previews = [];
var loaded = 0;
var current = 0;
var targetX = 0, targetY = 0;
var zoom = .14;
var isZoomed = false;
var hide = false;
var tile = false;
var lastTouchAtTime = null;
var myTimeout = null;
var hd;


window.addEventListener("resize", function () {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	draw();
});
canvas.addEventListener("drop", dropHandler);
canvas.addEventListener("dragover", dragOverHandler);
canvas.addEventListener("mousedown", mousedownHandler);
canvas.addEventListener("mouseup", mouseupHandler);
canvas.addEventListener("mousemove", mousemoveHandler);
canvas.addEventListener("wheel", wheelHandler);
canvas.addEventListener("touchstart", touchHandler);
canvas.addEventListener("touchmove", touchHandler);
canvas.addEventListener("touchend", touchHandler);

window.addEventListener("keydown", function (ev) {
	let key = ev.key;
	console.log(key);
	if (key === "ArrowRight") {
		current = (current + 1) % images.length;
		draw();
	} else if (key === "ArrowLeft") {
		current = (current - 1 + images.length) % images.length;
		draw();
	} else if (key === "ArrowUp") {
		zoomLevelDecrease();
		draw();
		context.strokeRect(
			canvas.width/2-canvas.width/2*zoom,
			canvas.height/2-canvas.height/2*zoom,
			canvas.width * zoom,
			canvas.height * zoom
		);
	} else if (key === "ArrowDown") {
		zoomLevelIncrease();
		draw();
		context.strokeRect(
			canvas.width/2-canvas.width/2*zoom,
			canvas.height/2-canvas.height/2*zoom,
			canvas.width * zoom,
			canvas.height * zoom
		);
	} else if (key === "s") {
		//shuffle
		console.log("shuffle");
		var newOrder = [];
		var newPreviews = [];
		for (var i=0;i<=current;i++) {
			newOrder.push(images.shift());
			newPreviews.push(previews.shift());
		}
		while (images.length > 0) {
			var index = Math.floor(Math.random()*images.length);
			newOrder.push(images.splice(index, 1)[0]);
			newPreviews.push(previews.splice(index, 1)[0]);
		}
		console.log(newOrder);
		images = newOrder;
		previews = newPreviews;
		draw();
	//} else if (key === "r") {
	//	//current = Math.floor(Math.random() * images.length);
	//	current = hd.drawOne();
	//	draw();
	} else if (key === "w") {
		console.log("wizard");
		var wizard = document.createElement("img");
		wizard.onload = function () {
			images.push(wizard);
			previews.push(wizard);
			loaded += 1;
			draw();
		};
		wizard.src = "wizard.png";
		console.log(wizard);
	} else if (key === "h") {
		hide = !hide;
		draw();
	} else if (key === "t") {
		tile = !tile;
		draw();
	}
});
