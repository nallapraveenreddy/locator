const homelist = (req,res) =>{
  res.render('locations-list', {
  title: 'Loc8r - Find a place to work with wifi',
  pageHeader: {
      title: 'Loc8r',
      strapline: 'Find places to work with wifi near you!'
  },
  sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
  locations: [{
      name: 'Cafe Niloufer',
      address: '11-5-422/C/B, Lakdikapul',
      rating: 4,
      facilities: ['Hot drinks', 'Food', 'Premium wifi'],
      distance: '1.0 km from Birla Mandir',
      href: '/location'
  }, {
      name: 'Beyond Coffee',
      address: 'Plot 237, Road 36, Jubilee Hills',
      rating: 4,
      facilities: ['Hot drinks', 'Food', 'Premium wifi'],
      distance: '2.5 km from Golconda Fort',
      href: '/location/2'
  }, {
      name: 'Roastery Coffee House',
      address: 'House 418, 8/2/287/12, Road 14, Banjara Hills',
      rating: 2,
      facilities: ['Food', 'Premium wifi'],
      distance: '2.4 km from Golconda Fort',
      href: '/location/3'
  }]
});
};
const locationInfo = (req,res) =>{
  res.render('location-info', {
      title: 'Cafe Niloufer',
      pageHeader: {
          title: 'Cafe Niloufer'
      },
      sidebar: {
          context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
          callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
      },
      location: {
          name: 'Cafe Niloufer',
          address: '11-5-422/C/B, Lakdikapul',
          rating: 4,
          facilities: ['Hot drinks', 'Food', 'Premium wifi'],
          coords: {
              lat: 51.455041,
              lng: -0.9690884
          },
          openingTimes: [{
              days: 'Monday - Friday',
              opening: '7:00am',
              closing: '7:00pm',
              closed: false
          }, {
              days: 'Saturday',
              opening: '8:00am',
              closing: '5:00pm',
              closed: false
          }, {
              days: 'Sunday',
              closed: true
          }],
          reviews: [{
              author: 'Simon Holmes',
              rating: 5,
              timestamp: '16 July 2013',
              reviewText: 'What a great place. I can\'t say enough good things about it.'
          }, {
              author: 'Charlie Chaplin',
              rating: 3,
              timestamp: '16 June 2013',
              reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
          }]
      }
  });
};

const locationInfo2 = function(req, res) {
  res.render('location-info2', {
      title: 'Beyond Coffee',
      pageHeader: {
          title: 'Beyond Coffee'
      },
      sidebar: {
          context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
          callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
      },
      location: {
          name: 'Beyond Coffee',
          address: '125 High Street, Reading, RG6 1PS',
          rating: 3,
          facilities: ['Hot drinks', 'Food', 'Premium wifi'],
          coords: {
              lat: 51.455041,
              lng: -0.9690884
          },
          openingTimes: [{
              days: 'Monday - Friday',
              opening: '7:00am',
              closing: '7:00pm',
              closed: false
          }, {
              days: 'Saturday',
              opening: '8:00am',
              closing: '5:00pm',
              closed: false
          }, {
              days: 'Sunday',
              closed: true
          }],
          reviews: [{
              author: 'Simon Holmes',
              rating: 5,
              timestamp: '16 July 2013',
              reviewText: 'What a great place. I can\'t say enough good things about it.'
          }, {
              author: 'Charlie Chaplin',
              rating: 3,
              timestamp: '16 June 2013',
              reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
          }]
      }
  });
};

const locationInfo3 = function(req, res) {
  res.render('location-info3', {
      title: 'Roastery Coffee House',
      pageHeader: {
          title: 'Roastery Coffee House'
      },
      sidebar: {
          context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
          callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
      },
      location: {
          name: 'Roastery Coffee House',
          address: '125 High Street, Reading, RG6 1PS',
          rating: 3,
          facilities: ['Hot drinks', 'Food', 'Premium wifi'],
          coords: {
              lat: 51.455041,
              lng: -0.9690884
          },
          openingTimes: [{
              days: 'Monday - Friday',
              opening: '7:00am',
              closing: '7:00pm',
              closed: false
          }, {
              days: 'Saturday',
              opening: '8:00am',
              closing: '5:00pm',
              closed: false
          }, {
              days: 'Sunday',
              closed: true
          }],
          reviews: [{
              author: 'Simon Holmes',
              rating: 5,
              timestamp: '16 July 2013',
              reviewText: 'What a great place. I can\'t say enough good things about it.'
          }, {
              author: 'Charlie Chaplin',
              rating: 3,
              timestamp: '16 June 2013',
              reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
          }]
      }
  });
};

/* GET 'Add review' page */
const addReview = function(req, res) {
  res.render('location-review-form', {
      title: 'Review Cafe Niloufer on Loc8r',
      pageHeader: {
          title: 'Review Cafe Niloufer'
      }
  });
};

/* GET 'Add review' page */
const addReview2 = function(req, res) {
  res.render('location-review-form2', {
      title: 'Review Beyond Coffee on Loc8r',
      pageHeader: {
          title: 'Review Beyond Coffee'
      }
  });
};

/* GET 'Add review' page */
const addReview3 = function(req, res) {
  res.render('location-review-form3', {
      title: 'Review Roastery Coffee House on Loc8r',
      pageHeader: {
          title: 'Review Roastery Coffee House Cafe'
      }
  });
};

module.exports = {
  homelist,
  locationInfo,
  locationInfo2,
  locationInfo3,
  addReview,
  addReview2,
  addReview3
};
