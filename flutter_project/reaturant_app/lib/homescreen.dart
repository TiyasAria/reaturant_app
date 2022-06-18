

import 'package:flutter/material.dart';
import 'package:reaturant_app/detail_screen.dart';
import 'package:reaturant_app/theme.dart';

import 'model.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({Key? key}) : super(key: key);

  static String routeName = '/homescreen' ;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: FutureBuilder<String>(
          future:  DefaultAssetBundle.of(context).loadString('asset/local _restaurant.json'),
          builder: ( context, snapshot) {
            final List<Restaurant> restaurant = parseRestaurant(snapshot.data);
            return SingleChildScrollView(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Padding(
                    padding: EdgeInsets.only(left: 10),
                    child: Text('Restaurant', style: commonText.copyWith(
                      fontSize: 30,
                      fontWeight: FontWeight.bold
                    ),),
                  ),
                  Padding(
                      padding: EdgeInsets.only(left: 10),
                  child: Text('Recommendation restaurant for you', style: commonText,)),
                  SizedBox(height: 15),
                  Container(
                    height: 600,
                    child: ListView.builder(

                        itemCount: restaurant.length,
                        itemBuilder: (context, index) => _buildRestaurantItem(context, restaurant[index])
                    ),
                  ),
                ],
              ),
            );
          },
        ),
      )
    );
  }

  Widget _buildRestaurantItem(BuildContext context , Restaurant restaurant){
    return GestureDetector(
      onTap: () {
        Navigator.pushNamed(context, DetailScreen.routeName, arguments: restaurant);
      },
      child: Padding(
        padding: EdgeInsets.symmetric(vertical: 5, horizontal: 5),
        child: Card(
          elevation: 1,
          child: Row(
            children: [
              Padding(
                padding: EdgeInsets.all(3),
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(10),
                    child: Image.network(restaurant.pictureId, width: 100,)),
              ),
              Padding(
                padding: EdgeInsets.only(left: 20),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(restaurant.name, style: titleList),
                    SizedBox(height: 4),
                    Row(
                        children: [
                          Icon(Icons.location_on_rounded, size: 14,color: Colors.red,),
                          SizedBox(width: 8,),
                          Text(restaurant.city, style: commonText,)
                        ]),
                    SizedBox(height: 10),
                    Row(
                      children: [
                        Icon(Icons.star, size: 14,color: Colors.yellow,),
                        SizedBox(width: 8,),
                        Text(restaurant.rating.toString() , style: commonText,)
                      ],
                    )
                  ],
                ),
              )
            ],
          ),

        ),
      ),
    );
  }

}
